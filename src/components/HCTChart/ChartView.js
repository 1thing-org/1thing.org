import React from "react";

import './ChartView.scss'

import moment from 'moment';
import { useContext, useEffect, useState } from 'react';

import "../../assets/vendor/nucleo/css/nucleo.css"
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../assets/scss/argon-design-system-react.scss?v1.1.0";
import IncidentChart from './IncidentChart';

import { useCookies } from 'react-cookie';
import * as incidentsService from '../../services/incidents';
import { getBrowserLang, SUPPORTED_LANGUAGES } from '../../utility/Languages';
import { useRouter } from '../../utility/hooks/useRouter';

import { isObjEmpty } from '../../utility/Utils';
import { getValidState } from '../../utility/Utils';
import { useTranslation } from 'react-i18next';
import'../../i18n';

const ChartView =() =>{
// class ChartView extends React.Component {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [cookies, setCookie] = useCookies(['lang']);
  const lang_code = router.query.lang || cookies.lang || getBrowserLang();
  const [selectedLangCode, setSelectedLangCode] = useState(lang_code);
  const support_languages = [];

  Object.entries(SUPPORTED_LANGUAGES).forEach(([lang_code, lang_name]) => {
    support_languages.push({
      value: lang_code,
      label: lang_name,
    });
  });

  // const isMobile = (window.innerWidth <= 786)
  const [isShowPer10kAsian, setIsShowPer10kAsian] = useState(false)
  const [incidents, setIncidents] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [dateRange, setDateRange] = useState();
  const [isFirstLoadData, setIsFirstLoadData] = useState(true)
  const [incidentTimeSeries, setIncidentTimeSeries] = useState([
    {
      monthly_cases: 0,
      key: moment().format('YYYY-MM-DD'),
      value: 0,
    },
  ]);
  const [incidentAggregated, setIncidentAggregated] = useState([]);
  const [loading, setLoading] = useState(false);

  const setSelectedLang = (lang_code) => {
    setCookie('lang', lang_code);
    setSelectedLangCode(lang_code);
  };
  // stats [{'2021-01-02:1}, {'2021-01-01:1}...]  dates descending
  // Remove date out of the range, and insert days that does not have data
  // start_date, end_date: Date
  // monthly: monthly aggregation { first_day_of_month: count_of_the_month }
  const mergeDate = (stats, start_date, end_date, monthly) => {
    const new_stats = [];
    let start = moment(start_date);
    const end = moment(end_date);
    const strStartDate = start.format('YYYY-MM-DD');
    const strEndDate = end.format('YYYY-MM-DD');
    while (start <= end) {
      const strDate = start.format('YYYY-MM-DD');
      const monthlyData = monthly[start.format('YYYY-MM')];
      if (stats.length > 0) {
        if (
          stats[stats.length - 1].key < strStartDate ||
          stats[stats.length - 1].key > strEndDate
        ) {
          stats.pop();
          continue; //skip data that is out of range
        }
        if (stats[stats.length - 1].key == strDate) {
          //found the date in stats, use it
          new_stats.push({
            monthly_cases: monthlyData,
            ...stats[stats.length - 1],
          });
          stats.pop();
          continue;
        }
      }
      new_stats.push({ key: strDate, value: null, monthly_cases: monthlyData });
      start.add(1, 'days');
    }
    return new_stats;
  };
  const loadData = (updateMap = false) => {
    if (dateRange?.length != 2) return;

    setLoading(true);
    incidentsService
      .getIncidents(dateRange[0], dateRange[1], selectedState, selectedLangCode)
      .then((incidents) => setIncidents(incidents));
    incidentsService
      .getStats(dateRange[0], dateRange[1], selectedState)
      .then((stats) => {
        setIncidentTimeSeries(
          mergeDate(
            stats.stats,
            dateRange[0],
            dateRange[1],
            stats.monthly_stats
          )
        );
        if (updateMap) {
          setIncidentAggregated(stats.total);
        }
        setLoading(false);
        setIsFirstLoadData(false)
      });
  };

  const generateUrl = (from, to, state, lang) => {
    return `/home?from=${moment(from).format('YYYY-MM-DD')}&to=${moment(
      to
    ).format('YYYY-MM-DD')}${state ? '&state=' + state.toUpperCase() : ''}${
      lang ? '&lang=' + lang : ''
    }`;
  };

  const isParameterChanged = () => {
    if (dateRange?.length != 2) {
      return true;
    }
    const cururl = generateUrl(
      router.query.from,
      router.query.to,
      router.query.state,
      router.query.lang
    );
    const newurl = generateUrl(
      dateRange[0],
      dateRange[1],
      selectedState,
      selectedLangCode
    );
    return cururl !== newurl;
  };
  const saveHistory = () => {
    if (!dateRange) return;
    //if date ranger or state is changed, save in router history
    if (!isParameterChanged()) return;
    const newurl = generateUrl(
      dateRange[0],
      dateRange[1],
      selectedState,
      selectedLangCode
    );

    router.history.push(newurl);
  };

  useEffect(() => {
    if (isParameterChanged()) {
      const defaultDateRange = isObjEmpty(router.query)
        ? [moment().subtract(1, 'years').toDate(), new Date()]
        : [
            moment(router.query.from).toDate(),
            moment(router.query.to).toDate(),
          ];

      setSelectedState(getValidState(router.query.state));
      setDateRange(defaultDateRange);
    }
  }, [router]);
  useEffect(() => {
    // console.log("selectedState:" + selectedState)
    changeLanguage(selectedLangCode);
    loadData();
    saveHistory();
  }, [selectedState, selectedLangCode]);
  //update both incidents and map
  useEffect(() => {
    loadData(true);
    saveHistory();
  }, [dateRange]);

  // const { colors } = useContext(ThemeColors);

  // handle date change
  function handleDateRangeSelect(ranges) {
    if (ranges) {
      setDateRange(ranges);
    }
  }

  const stateToggled = (state) => {
    // console.log("This is:" + this);
    const newState = state == selectedState ? null : state
    // console.log("Toggle state:" + state + " selectedState:" + selectedState + " new state:" + newState)
    setSelectedState(newState);
  }
    
    // render() {
      return (
          <>
    
          <div className="word">

            <div className="childword">
            <p className="t1">*Anti-Asian hate crimes</p>
              <p className="t1">have increased</p>
              <h2 className="t2">By 150%</h2>
              <p className="t3">*Note: data from 1 thing team</p>
            </div>

            <div className="childword">
              <p className="t1">*Anti-Asian hate crimes</p>
              <p className="t1"> happen</p>
              <h2 className="t2">Every Day</h2>
            </div>
              
            <div className="childword">
              <p className="t1">*Anti-Asian attacks have </p>
              <p className="t1">been reported since Jan</p>
              <h2 className="t2">Over 3000</h2>
            </div>
          </div>

              <div className="chart">
              <IncidentChart
                  className="behind-relative"
                  // color={"onething"}
                  chart_data={incidentTimeSeries}
                  state={selectedState}
                  isFirstLoadData={isFirstLoadData}
                />
              </div>

              <div className="link1">
              <a className="vm1">View More &rarr;</a></div>
        

          </>
      );
    // }
  }
  
  export default ChartView;
  
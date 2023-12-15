import React, { useEffect, useState, useCallback, useMemo } from "react";

import "./ChartView.css";

import moment from "moment";
import { Row, Col, Container } from "reactstrap";
import { Button } from "react-bootstrap";

import IncidentChart from "./IncidentChart";

import * as incidentsService from "./incident";

import logo from "../../../assets/home-page/smallLogo.svg";

const ChartView = () => {
  const dateRange = useMemo(() => [moment().subtract(1, "year"), moment()], []);
  const [isFirstLoadData, setIsFirstLoadData] = useState(true);
  const [totalAnnualCases, setTotalCases] = useState(0);
  const [totalLastMonthCases, setTotalLastMonthCases] = useState(0);
  const [lastMonthName, setLastMonthName] = useState("");
  const [incidentTimeSeries, setIncidentTimeSeries] = useState([
    {
      monthly_cases: 0,
      key: moment().format("YYYY-MM-DD"),
      value: 0,
    },
  ]);

  const mergeDate = (stats, start_date, end_date, monthly) => {
    const new_stats = [];
    let start = moment(start_date);
    const end = moment(end_date);
    const strStartDate = start.format("YYYY-MM-DD");
    const strEndDate = end.format("YYYY-MM-DD");
    while (start <= end) {
      const strDate = start.format("YYYY-MM-DD");
      const monthlyData = monthly[start.format("YYYY-MM")];
      if (stats.length > 0) {
        if (
          stats[stats.length - 1].key < strStartDate ||
          stats[stats.length - 1].key > strEndDate
        ) {
          stats.pop();
          continue;
        }
        if (stats[stats.length - 1].key === strDate) {
          new_stats.push({
            monthly_cases: monthlyData,
            ...stats[stats.length - 1],
          });
          stats.pop();
          continue;
        }
      }
      new_stats.push({ key: strDate, value: null, monthly_cases: monthlyData });
      start.add(1, "days");
    }
    return new_stats;
  };
  const calculateTotalCases = (stats) => {
    let total = 0;
    stats.forEach((stat) => {
      total += stat.value;
    });
    return total;
  };
  const calculateTotalCasesOfMonth = (stats, month) => {
    let total = 0;
    stats.forEach((stat) => {
      if (stat.key.substring(0, 7) === month) {
        total += stat.value;
      }
    });
    return total;
  };

  const loadData = useCallback(() => {
    incidentsService.getStats(dateRange[0], dateRange[1]).then((stats) => {
      const mergedData = mergeDate(
        stats.stats,
        dateRange[0],
        dateRange[1],
        stats.monthly_stats
      );
      setIncidentTimeSeries(mergedData);
      setTotalCases(calculateTotalCases(mergedData));
      const lastMonthName = moment().subtract(1, "month").format("MMMM");
      const lastMonth = moment().subtract(1, "month").format("YYYY-MM");
      setTotalLastMonthCases(calculateTotalCasesOfMonth(mergedData, lastMonth));
      setLastMonthName(lastMonthName);
      setIsFirstLoadData(false);
    });
  }, [dateRange]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Container className="hcr-backgrund">
      <Container md={12} className="hcr">
        <Row>
          <Col className="chart-title">
            <img
              src={logo}
              style={{ width: "37px", height: "23.5px" }}
              alt="1 Thing Logo"
            ></img>
            <p className="t3">We Made A Hate Crime Tracker</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="t4">
              Anti-Asian hate crimes are happening everyday and we’ve built a
              tool to help track them. 1 Thing’s Hate Crime Tracker project
              scrapes reports from national media news outlets and visualizes
              the data to raise awareness about these terrible incidents.
            </p>
          </Col>
        </Row>
        <div className="chart">
          <IncidentChart
            className="behind-relative"
            chart_data={incidentTimeSeries}
            isFirstLoadData={isFirstLoadData}
          />
        </div>
        {dimensions.width < 768 ? (
          <div>
            <Container className="word-mobile">
              <Col md={6} className="childword-mobile">
                <p className="t2-mobile">{totalLastMonthCases} Cases</p>
                <p className="t1-mobile">were reported in {lastMonthName}</p>
              </Col>

              <Col md={6} className="childword-mobile">
                <p className="t2-mobile">{totalAnnualCases} Cases</p>
                <p className="t1-mobile">were reported last year</p>
              </Col>
            </Container>
          </div>
        ) : (
          <div>
            <Container className="word">
              <Col md={6} className="childword">
                <h3 className="t-cases">{totalLastMonthCases} Cases</h3>
                <p className="t1">were reported in {lastMonthName}</p>
              </Col>

              <Col md={6} className="childword">
                <h3 className="t-cases">{totalAnnualCases} Cases</h3>
                <p className="t1">were reported in the past 12 months</p>
              </Col>
            </Container>
          </div>
        )}
        <Col className="links">   
            <Button
              className="chart-button"
              href="https://hatecrimetracker.1thing.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="chart-button-text">View Project</div>
            </Button>

            <Button
              className="chart-button"
              href="https://hatecrimetracker.1thing.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="chart-button-text">See Live Tracker</div>
            </Button>
         
        </Col>
      </Container>
    </Container>
  );
};

export default ChartView;

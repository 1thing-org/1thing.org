import React from "react";

import "./ChartView.scss";

import moment from "moment";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";

import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../assets/scss/argon-design-system-react.scss?v1.1.0";
import IncidentChart from "./IncidentChart";

import * as incidentsService from "../../services/incidents";
// import { useRouter } from '../../utility/hooks/useRouter';

const ChartView = () => {
	// const router = useRouter();
	const [dateRange, setDateRange] = useState([
		moment().subtract(1, "year"),
		moment(),
	]);
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
	const [loading, setLoading] = useState(false);

	// stats [{'2021-01-02:1}, {'2021-01-01:1}...]  dates descending
	// Remove date out of the range, and insert days that does not have data
	// start_date, end_date: Date
	// monthly: monthly aggregation { first_day_of_month: count_of_the_month }
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
					continue; //skip data that is out of range
				}
				if (stats[stats.length - 1].key === strDate) {
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
			start.add(1, "days");
		}
		return new_stats;
	};
	const calculateTotalCases = stats => {
		let total = 0;
		stats.forEach(stat => {
			total += stat.value;
		});
		return total;
	};
	const calculateTotalCasesOfMonth = (stats, month /* string 2022-01 */) => {
		let total = 0;
		stats.forEach(stat => {
			if (stat.key.substring(0, 7) === month) {
				total += stat.value;
			}
		});
		return total;
	};
	const loadData = () => {
		setLoading(true);
		incidentsService.getStats(dateRange[0], dateRange[1]).then(stats => {
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
			setLoading(false);
			setIsFirstLoadData(false);
		});
	};

	useEffect(() => {
		loadData();
	}, []);

	//responsive
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
		<div className="hcr">
			<div className="title">
				<p className="t3">Anti-Asian hate crimes are happening everyday.</p>
				<p className="t4">
					The following numbers are based on incidents reported by major media
					in the US
				</p>
			</div>

			{dimensions.width < 576 ? (
				<div>
					<Container className="word">
						<div className="childword">
							<p className="t2">{totalLastMonthCases} Cases</p>
							<p className="t1">were reported in {lastMonthName}</p>
						</div>

						<div>
							<p className="t2">{totalAnnualCases} Cases</p>
							<p className="t1">were reported last year</p>
						</div>
					</Container>
				</div>
			) : (
				<div>
					<Container className="word">
						<Row className="childword justify-content-center">
							<Col className="col-3">
								<h2 className="t2">{totalLastMonthCases} Cases</h2>
								<p className="t1">was reported in {lastMonthName}</p>
							</Col>

							<Col className="col-3">
								<h2 className="t2">{totalAnnualCases} Cases</h2>
								<p className="t1">was reported last year</p>
							</Col>
						</Row>
					</Container>
				</div>
			)}
			<div className="chart">
				<IncidentChart
					className="behind-relative"
					chart_data={incidentTimeSeries}
					isFirstLoadData={isFirstLoadData}
				/>
			</div>

			<div>
				<Row className="link1">
					<Col
						lg={{ offset: 10 }}
						md={{ offset: 8 }}
						sm={{ offset: 5 }}
						xs={{ offset: 5 }}>
						<a
							className="vm1"
							href="https://hatecrimetracker.1thing.org/"
							target="_blank"
							rel="noopener noreferrer">
							View More &rarr;
						</a>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default ChartView;

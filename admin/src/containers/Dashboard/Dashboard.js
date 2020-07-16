import React, { Component } from 'react'
import { Container, Col, Row, Card } from "react-bootstrap/";
import Chart from "react-apexcharts";

const donutData = {
    series: [44, 55, 41, 17, 15],
    options: {
        chart: {
            type: 'donut',
        },
        labels: ["Apple", "Samsung", "Sony", "Oppo", "Xiaomi"],
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
}

const areaData = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },
}

const columnData = {
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    },
}

export default class Dashboard extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col lg="4">
                        <Card>
                            <Card.Body>
                                <Chart options={donutData.options} series={donutData.series} type="donut" width="100%" height={400} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card>
                            <Card.Body>
                                <Chart options={areaData.options} series={areaData.series} type="area" width="100%" height={350} />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card>
                            <Card.Body>
                                <Chart options={columnData.options} series={columnData.series} type="bar" height={350} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Col lg="4">
                        <Card>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="8"></Col>
                </Row>
            </Container>
        )
    }
}

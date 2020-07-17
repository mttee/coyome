import React, { Component } from 'react'
import { Container, Col, Row, Card } from "react-bootstrap/";
import Chart from "react-apexcharts";
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Avatar from '@material-ui/core/Avatar';
import ArchiveIcon from '@material-ui/icons/Archive';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

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
            labels: {
                colors: 'white',
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: '100%'
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
            type: 'area',
            toolbar: {
                show: false,
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            labels: {
                colors: 'white',
            },
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
            toolbar: {
                show: false,
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            labels: {
                colors: 'white',
            },
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

const radialData = {
    series: [75],
    options: {
        chart: {
            type: 'radialBar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },

                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#888',
                        fontSize: '17px',
                    },
                    value: {
                        formatter: function (val) {
                            return parseInt(val);
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ABE5A1'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Total'],
    },
}

const row_two_chart_100 = {
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 45, 65, 40]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 36, 26, 45]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
                // endingShape: 'rounded',
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                show: true,
                style: {
                    colors: 'white',
                    fontSize: '12px',
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: 'white',
                    fontSize: '12px',
                },
            },
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            labels: {
                colors: 'white',
            },
        },
    },
}

const social_source = {
    series: [{
        name: 'Facebook',
        data: [60]
    },
    {
        name: 'Twitter',
        data: [34]
    },
    {
        name: 'Instagram',
        data: [23]
    },
    ],
    options: {
        colors:['#556ee6', '#50a5f1', '#e83e8c'],
        chart: {
            type: 'bar',
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
          },
        xaxis: {
            categories: [2020],
            labels: {
                style: {
                    colors: ['white'],
                }
            }
        },
        yaxis:{
            labels: {
                style: {
                    colors: ['white'],
                }
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K"
                },
            },
        },
        dataLabels: {
            style: {
                colors:['black']
            },
        },
        fill: {
            opacity: 1

        },
        legend: {
            show: false,
        }
    },
}

export default class Dashboard extends Component {
    render() {
        return (
            <Container fluid className="dashboard">
                <Row className="justify-content-md-center">
                    <Col lg="4">
                        <Card>
                            <Card.Body>
                                <Chart options={donutData.options} series={donutData.series} type="donut" width="100%" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" className="pr-0 pl-0">
                        <Card>
                            <Card.Body>
                                <Chart options={areaData.options} series={areaData.series} type="area" width="100%" />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card>
                            <Card.Body>
                                <Chart options={columnData.options} series={columnData.series} type="bar" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Col lg="4">
                        <Card className="h-50">
                            <Card.Body className="social-source">
                                <Card.Title>Social Source</Card.Title>
                                <Chart options={social_source.options} series={social_source.series} type="bar" height="100px" />
                                <Row className="justify-content-md-center">
                                    <Col md="4" className="d-flex align-items-center flex-column">
                                        <Avatar className="facebook">
                                            <FontAwesomeIcon icon={faFacebookF} className="ml-1" />
                                        </Avatar>
                                        <p className="text-center mt-2">Facebook</p>
                                        <span className="number text-center mt-2">125 sales</span>
                                    </Col>
                                    <Col md="4" className="d-flex align-items-center flex-column">
                                        <Avatar className="twitter">
                                            <FontAwesomeIcon icon={faTwitter} className="ml-1" />
                                        </Avatar>
                                        <p className="text-center mt-2">Twitter</p>
                                        <span className="number text-center mt-2">112 sales</span>
                                    </Col>
                                    <Col md="4" className="d-flex align-items-center flex-column">
                                        <Avatar className="instagram">
                                            <FontAwesomeIcon icon={faInstagram} className="ml-1" />
                                        </Avatar>
                                        <p className="text-center mt-2">Instagram</p>
                                        <span className="number text-center mt-2">104 sales</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="h-50 mt-3">
                            <Card.Body className="monthly-earning">
                                <Card.Title>Monthly Earning</Card.Title>
                                <Row className="justify-content-center">
                                    <Col lg="8" className="d-flex align-items-start flex-column">
                                        <p className="text-left">This month</p>
                                        <h3 className="text-left mt-auto">$34,252</h3>
                                        <Button variant="contained" size="small" color="primary" className="float-left mt-auto">
                                            View more <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-1" />
                                        </Button>
                                        <p className="float-left text-left mt-auto">We craft digital, graphic and dimensional thinking.</p>
                                    </Col>
                                    <Col lg="4">
                                        <Chart options={radialData.options} series={radialData.series} type="radialBar" height={200} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="8" className="pl-0">
                        <Row className="justify-content-md-center h-25">
                            <Col md="4">
                                <Card className="dashboard-small-card">
                                    <Card.Body>
                                        <Row className="justify-content-md-center align-middle h-100">
                                            <Col lg="6" className="mt-auto mb-auto">
                                                <p className="small-card-title">Order</p>
                                                <p className="small-card-number">1,235</p>
                                            </Col>
                                            <Col lg="6" className="d-flex align-middle justify-content-end">
                                                <Avatar>
                                                    <LibraryBooksIcon />
                                                </Avatar>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4" className="pr-0 pl-0">
                                <Card className="dashboard-small-card">
                                    <Card.Body>
                                        <Row className="justify-content-md-center align-middle h-100">
                                            <Col lg="6" className="mt-auto mb-auto">
                                                <p className="small-card-title">Revenue</p>
                                                <p className="small-card-number">$37.55</p>
                                            </Col>
                                            <Col lg="6" className="d-flex align-middle justify-content-end">
                                                <Avatar>
                                                    <ArchiveIcon />
                                                </Avatar>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="dashboard-small-card">
                                    <Card.Body>
                                        <Row className="justify-content-md-center align-middle h-100">
                                            <Col lg="6" className="mt-auto mb-auto">
                                                <p className="small-card-title">Average Price</p>
                                                <p className="small-card-number">$26.6</p>
                                            </Col>
                                            <Col lg="6" className="d-flex align-middle justify-content-end">
                                                <Avatar>
                                                    <LoyaltyIcon />
                                                </Avatar>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Card className="h-75 mt-3">
                            <Card.Body>
                                <Card.Title className="mb-0">Product</Card.Title>
                                <div id="row-two-chart-100">
                                    <Chart options={row_two_chart_100.options} series={row_two_chart_100.series} type="bar" height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

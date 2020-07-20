import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  Table,
  Badge as BBadge,
  Button,
} from "react-bootstrap/";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Avatar from "@material-ui/core/Avatar";
import ArchiveIcon from "@material-ui/icons/Archive";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const columnData = {
  series: [
    {
      name: "Desktop",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Tablet",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Mobile",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  options: {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: "white",
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        show: true,
        style: {
          colors: "white",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "white",
          fontSize: "12px",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " thousands";
        },
      },
    },
  },
};

const row_two_chart_100 = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 45, 65, 40],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 36, 26, 45],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    colors: ["#556ee6", "#c7943b", "#34c38f"],
    plotOptions: {
      bar: {
        columnWidth: "50%",
        // endingShape: 'rounded',
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: true,
        style: {
          colors: "white",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: "white",
          fontSize: "12px",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: "white",
      },
    },
  },
};

const social_source = {
  series: [
    {
      name: "Facebook",
      data: [60],
    },
    {
      name: "Twitter",
      data: [34],
    },
    {
      name: "Instagram",
      data: [23],
    },
  ],
  options: {
    colors: ["#556ee6", "#50a5f1", "#e83e8c"],
    chart: {
      type: "bar",
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [2020],
      labels: {
        style: {
          colors: ["white"],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["white"],
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    dataLabels: {
      style: {
        colors: ["black"],
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
  },
};

const StyledBadge = withStyles((theme, color) => ({
  badge: {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

export default class Dashboard extends Component {
  render() {
    return (
      <Container fluid className="dashboard">
        <Row className="justify-content-md-center">
          <Col lg="4">
            <Card>
              <Card.Body className="social-source">
                <Card.Title>Social Source</Card.Title>
                <Chart
                  options={social_source.options}
                  series={social_source.series}
                  type="bar"
                  height="100px"
                />
                <Row className="justify-content-md-center">
                  <Col xs="4" className="d-flex align-items-center flex-column">
                    <Avatar className="facebook">
                      <FontAwesomeIcon icon={faFacebookF} className="ml-1" />
                    </Avatar>
                    <p className="text-center mt-2">Facebook</p>
                    <span className="number text-center mt-2">125 sales</span>
                  </Col>
                  <Col xs="4" className="d-flex align-items-center flex-column">
                    <Avatar className="twitter">
                      <FontAwesomeIcon icon={faTwitter} className="ml-1" />
                    </Avatar>
                    <p className="text-center mt-2">Twitter</p>
                    <span className="number text-center mt-2">112 sales</span>
                  </Col>
                  <Col xs="4" className="d-flex align-items-center flex-column">
                    <Avatar className="instagram">
                      <FontAwesomeIcon icon={faInstagram} className="ml-1" />
                    </Avatar>
                    <p className="text-center mt-2">Instagram</p>
                    <span className="number text-center mt-2">104 sales</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="8" className="pl-lg-0">
            <Card>
              <Card.Body>
                <Card.Title className="mb-0">Access Devices</Card.Title>
                <Chart
                  options={columnData.options}
                  series={columnData.series}
                  type="bar"
                  height={250}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center mt-3">
          <Col lg="12">
            <Row className="justify-content-md-center">
              <Col md="4">
                <Card className="dashboard-small-card">
                  <Card.Body>
                    <Row className="justify-content-md-center align-middle h-100">
                      <Col xs="9" className="mt-auto mb-auto">
                        <p className="small-card-title">Order</p>
                        <p className="small-card-number">1,235</p>
                      </Col>
                      <Col
                        xs="3"
                        className="d-flex align-middle justify-content-end"
                      >
                        <Avatar>
                          <LibraryBooksIcon />
                        </Avatar>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card className="dashboard-small-card mt-3">
                  <Card.Body>
                    <Row className="justify-content-md-center align-middle h-100">
                      <Col xs="9" className="mt-auto mb-auto">
                        <p className="small-card-title">Revenue</p>
                        <p className="small-card-number">$37.55</p>
                      </Col>
                      <Col
                        xs="3"
                        className="d-flex align-middle justify-content-end"
                      >
                        <Avatar>
                          <ArchiveIcon />
                        </Avatar>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card className="dashboard-small-card mt-3">
                  <Card.Body>
                    <Row className="justify-content-md-center align-middle h-100">
                      <Col xs="9" className="mt-auto mb-auto">
                        <p className="small-card-title">Average Price</p>
                        <p className="small-card-number">$26.6</p>
                      </Col>
                      <Col
                        xs="3"
                        className="d-flex align-middle justify-content-end"
                      >
                        <Avatar>
                          <LoyaltyIcon />
                        </Avatar>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="8 pl-lg-0">
                <Card>
                  <Card.Body>
                    <Card.Title className="mb-0">Products</Card.Title>
                    <Chart
                      options={row_two_chart_100.options}
                      series={row_two_chart_100.series}
                      type="bar"
                      height={250}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-md-center mt-3">
          <Col sm="12">
            <Card>
              <Card.Body>
                <Card.Title>Top Users</Card.Title>
                <div className="top-users">
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <StyledBadge
                            overlap="circle"
                            color="primary"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://material-ui.com/static/images/avatar/1.jpg"
                            />
                          </StyledBadge>
                        </td>
                        <td>Melody</td>
                        <td>Stodd</td>
                        <td>mstodd2@twitpic.com</td>
                        <td>Female</td>
                        <td>
                          <BBadge pill variant="success">
                            Active
                          </BBadge>
                        </td>
                        <td>
                          <Badge color="secondary" variant="dot"></Badge>
                          <span className="ml-2">Business</span>
                        </td>
                        <td>
                          <div className="d-flex actions">
                            <Button variant="outline-warning" size="sm">
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button variant="outline-danger ml-3" size="sm">
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <StyledBadge
                            overlap="circle"
                            color="secondary"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://material-ui.com/static/images/avatar/2.jpg"
                            />
                          </StyledBadge>
                        </td>
                        <td>Sonni</td>
                        <td>Gabotti</td>
                        <td>sgabotti0@wsj.com</td>
                        <td>Female</td>
                        <td>
                          <BBadge pill variant="danger">
                            Suspended
                          </BBadge>
                        </td>
                        <td>
                          <Badge color="primary" variant="dot"></Badge>
                          <span className="ml-2">Individual</span>
                        </td>
                        <td>
                          <div className="d-flex actions">
                            <Button variant="outline-warning" size="sm">
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button variant="outline-danger ml-3" size="sm">
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <StyledBadge
                            overlap="circle"
                            color="secondary"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://luxury-inside.vn/data/uploads/2020/07/irene-red-velvet-lan-dau-xam-chiem-man-anh-rong-2.jpg"
                            />
                          </StyledBadge>
                        </td>
                        <td>Abie</td>
                        <td>Cowperthwaite</td>
                        <td>acowperthwaite1@storify.com </td>
                        <td>Male</td>
                        <td>
                          <BBadge pill variant="success">
                            Active
                          </BBadge>
                        </td>
                        <td>
                          <Badge color="primary" variant="dot"></Badge>
                          <span className="ml-2">Individual</span>
                        </td>
                        <td>
                          <div className="d-flex actions">
                            <Button variant="outline-warning" size="sm">
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button variant="outline-danger ml-3" size="sm">
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <StyledBadge
                            overlap="circle"
                            color="primary"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://afamilycdn.com/150157425591193600/2020/6/29/10272071796276721750547919407477-15934067564311592637182.jpg"
                            />
                          </StyledBadge>
                        </td>
                        <td>Naomi</td>
                        <td>Galbreth</td>
                        <td>ngalbreth3@springer.com</td>
                        <td>Female</td>
                        <td>
                          <BBadge pill variant="warning">
                            Pending
                          </BBadge>
                        </td>
                        <td>
                          <Badge color="secondary" variant="dot"></Badge>
                          <span className="ml-2">Business</span>
                        </td>
                        <td>
                          <div className="d-flex actions">
                            <Button variant="outline-warning" size="sm">
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button variant="outline-danger ml-3" size="sm">
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <StyledBadge
                            overlap="circle"
                            color="secondary"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://i-ione.vnecdn.net/2020/07/07/irene-1594102938-8459-1594103056_680x0.gif"
                            />
                          </StyledBadge>
                        </td>
                        <td>Ashley</td>
                        <td>Jandl</td>
                        <td>ajandl4@mapy.cz</td>
                        <td>Male</td>
                        <td>
                          <BBadge pill variant="danger">
                            Suspended
                          </BBadge>
                        </td>
                        <td>
                          <Badge color="primary" variant="dot"></Badge>
                          <span className="ml-2">Individual</span>
                        </td>
                        <td>
                          <div className="d-flex actions">
                            <Button variant="outline-warning" size="sm">
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button variant="outline-danger ml-3" size="sm">
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <StyledBadge
                            overlap="circle"
                            color="secondary"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://kenh14cdn.com/2018/12/17/irene-1545033423959427218059.png"
                            />
                          </StyledBadge>
                        </td>
                        <td>Mildrid</td>
                        <td>Duplan</td>
                        <td>mduplan5@msn.com</td>
                        <td>Female</td>
                        <td>
                          <BBadge pill variant="warning">
                            Pending
                          </BBadge>
                        </td>
                        <td>
                          <Badge color="Primary" variant="dot"></Badge>
                          <span className="ml-2">Individual</span>
                        </td>
                        <td>
                          <div className="d-flex actions">
                            <Button variant="outline-warning" size="sm">
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button variant="outline-danger ml-3" size="sm">
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

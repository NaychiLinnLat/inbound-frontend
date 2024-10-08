import { Input, Select, Button, Form, Table, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Image,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import { dateformat } from "../utils/dateformat";
import { getProposalByPassportNoAndCountry } from "../api/proposalApi";
import { getAllCountry } from "../api/countryApi";
import img0 from "../assets/img/img0.jpg";
import img1_1 from "../assets/img/img1_1.jpg";
import img1_2 from "../assets/img/img1_2.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";

const EnquiryPage = ({ isFromCreate, setIsFromCreate }) => {
  const [hasProposal, setHasProposal] = useState(null);
  const [noRecord, setNoRecord] = useState(null);
  const [countryNameList, setCountryNameList] = useState(null);

  const [passportNumber, setPassportNumber] = useState(null);
  const [passportIssuedCountry, setPassportIssuedCountry] = useState(null);

  const [data, setData] = useState(null);

  const getAllCountryList = async () => {
    try {
      const response = await getAllCountry();

      if (response.status === 200) {
        const sortedData = response?.data?.sort(function (a, b) {
          if (a.countryName < b.countryName) {
            return -1;
          }
          if (a.countryName > b.countryName) {
            return 1;
          }
          return 0;
        });

        const modifiedCountryNameData = sortedData?.map((d) => {
          return {
            value: d.countryName.toUpperCase(),
            label: d.countryName.toUpperCase(),
          };
        });

        setCountryNameList(modifiedCountryNameData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchProposal = async (values) => {
    setHasProposal(false);

    const formData = new FormData();
    formData.append("passportNo", passportNumber);
    formData.append("passportIssuedCountry", passportIssuedCountry);
    try {
      const res = await getProposalByPassportNoAndCountry(formData);
      console.log(res.data);
      if (res.data.length > 0) {
        const sortedData = res.data.sort(function (b, a) {
          if (a.createdAt < b.createdAt) {
            return -1;
          }
          if (a.createdAt > b.createdAt) {
            return 1;
          }
          return 0;
        });
        const modifiedData = sortedData.map((d, index) => {
          return {
            ...d,
            key: d.id,
            number: index + 1,
            insuredPersonName: d.isChild ? d.childName : d.insuredPersonName,
            download: (
              <PDFDownloadLink document={MyDocument(d)}>
                <Button className="bg-blue text-white">Download</Button>
              </PDFDownloadLink>
            ),
          };
        });
        setData(modifiedData);
        setNoRecord(false);
        setHasProposal(true);
        console.log(modifiedData);
      } else {
        setHasProposal(false);
        setNoRecord(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "number",
      key: "number",
      width: "5%",
      align: "center",
    },
    {
      title: "Certificate No.",
      dataIndex: "certificateNo",
      key: "certificateNo",
      width: "10%",
      align: "center",
    },
    {
      title: "Insured Name",
      dataIndex: "insuredPersonName",
      key: "insuredPersonName",
      width: "10%",
      align: "center",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "7%",
      align: "center",
    },
    {
      title: "Contact No.",
      dataIndex: "phoneNo",
      key: "phoneNo",
      width: "10%",
      align: "center",
    },
    {
      title: "Coverage Plan (Days)",
      dataIndex: "coveragePlan",
      key: "coveragePlan",
      width: "10%",
      align: "center",
    },
    {
      title: "Premium Amount (USD)",
      dataIndex: "premiumRate",
      key: "premiumRate",
      width: "13%",
      align: "center",
    },
    {
      title: "Payment Date",
      dataIndex: "submittedDate",
      key: "submittedDate",
      width: "10%",
      align: "center",
    },
    {
      title: "Download",
      dataIndex: "download",
      key: "download",
      width: "10%",
      align: "center",
    },
  ];

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
    getAllCountryList();
  }, []);

  // Create PDF Document styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#fff",
    },
    column: {
      display: "flex",
      flexDirection: "row",
      marginTop: "5x",
      marginBottom: "10px",
    },
    section1: {
      fontSize: "10px",
      marginLeft: 40,
      padding: 5,
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
    },
    section2: {
      fontSize: "10px",
      marginLeft: 80,
      padding: 5,
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
    },
  });

  // Create Document Component
  const MyDocument = (d) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={img0} style={{ padding: "5px" }} />
          <View style={styles.column}>
            <View>
              <View style={styles.section1}>
                <Text style={{ width: "100px" }}>Insurance Period</Text>
                <Text>: {d.coveragePlan} Days</Text>
              </View>
              <View style={styles.section1}>
                <Text style={{ width: "100px" }}>Certificate Number</Text>
                <Text>: {d.certificateNo}</Text>
              </View>
              <View style={styles.section1}>
                <Text style={{ width: "100px" }}>Agent/Agency name</Text>
                <Text>: {d.agentName ?? `[N/A]`}</Text>
              </View>
              <View style={styles.section1}>
                <Text style={{ width: "100px" }}>Policy Holder</Text>
                <Text>: {d.insuredPersonName}</Text>
              </View>
              <View style={styles.section1}>
                <Text style={{ width: "100px" }}>Covid-19 coverage</Text>
                <Text>: Yes</Text>
              </View>
            </View>
            <View>
              <View style={styles.section2}>
                <Text style={{ width: "100px" }}>Benefits</Text>
                <Text>: As per benefit table</Text>
              </View>
              <View style={styles.section2}>
                <Text style={{ width: "100px" }}>Journey From</Text>
                <Text>: {d.journeyFrom.toUpperCase()}</Text>
              </View>
              <View style={styles.section2}>
                <Text style={{ width: "100px" }}>PP/Country</Text>
                <View>
                  <Text>: {d.passportNo}</Text>
                  <Text style={{ fontSize: "9px" }}>
                    &nbsp;&nbsp;{d.passportIssuedCountry}
                  </Text>
                </View>
              </View>
              <View style={styles.section2}>
                <Text style={{ width: "100px" }}>Payment Date</Text>
                <Text>: {d.submittedDate}</Text>
              </View>
              <View style={styles.section2}>
                <Text style={{ width: "100px" }}>Payment Ref No</Text>
                <Text>: {`17223334377866`}</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: "9px",
              padding: 5,
              marginLeft: 40,
            }}
          >
            {d.isChild
              ? `Buy for the child travel together with this passport holder
(child is not holding a valid passport)`
              : `Buy for yourself (This passport holder)`}
          </Text>
          <Text style={{ fontSize: "10px", padding: 5, marginLeft: 40 }}>
            This Certificate of Insurance confirms coverage for :
          </Text>
          <View
            style={{
              fontSize: "10px",
              padding: 5,
              marginLeft: 40,
              marginBottom: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#f1f5f9",
                border: "1px solid black",
                width: "500px",
              }}
            >
              <View
                style={{
                  borderRight: "1px solid black",
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "100px",
                }}
              >
                <Text style={{ margin: "0 auto", padding: 5 }}>
                  Insured's Name
                </Text>
              </View>
              <View
                style={{
                  borderRight: "1px solid black",
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "90px",
                }}
              >
                <Text style={{ margin: "0 auto", padding: 5 }}>
                  Date of birth
                </Text>
              </View>
              <View
                style={{
                  borderRight: "1px solid black",
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "70px",
                }}
              >
                <Text style={{ margin: "0 auto", padding: 5 }}>Age</Text>
              </View>
              <View
                style={{
                  borderRight: "1px solid black",
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "100px",
                }}
              >
                <Text style={{ margin: "0 auto", padding: 5 }}>
                  Insurance Period
                </Text>
              </View>
              <View
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "140px",
                }}
              >
                <Text style={{ margin: "0 auto", padding: 5 }}>
                  Passport No
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                width: "500px",
              }}
            >
              <View
                style={{
                  borderRight: "1px solid black",
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "100px",
                }}
              >
                <Text style={{ margin: "3px auto" }}>
                  {d.isChild ? d.childName : d.insuredPersonName}
                </Text>
              </View>
              <View
                style={{
                  borderRight: "1px solid black",
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "90px",
                }}
              >
                <Text style={{ margin: "3px auto" }}>
                  {d.isChild ? d.childDob : d.insuredPersondob}
                </Text>
              </View>
              <View
                style={{
                  borderRight: "1px solid black",
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "70px",
                }}
              >
                <Text style={{ margin: "3px auto" }}>{d.age}</Text>
              </View>
              <View
                style={{
                  borderRight: "1px solid black",
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "100px",
                }}
              >
                <Text style={{ margin: "3px auto" }}>
                  {d.coveragePlan} Days
                </Text>
              </View>
              <View
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,

                  width: "140px",
                }}
              >
                {d.isChild ? (
                  <Text style={{ margin: "3px auto" }}>
                    Child without a valid passport
                  </Text>
                ) : (
                  <>
                    <Text style={{ margin: "0 auto" }}>{d.passportNo}</Text>
                    <Text style={{ margin: "0 auto", fontSize: "9px" }}>
                      {d.passportIssuedCountry}
                    </Text>
                  </>
                )}
              </View>
            </View>
          </View>
          <Image src={img1_1} />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image src={img1_2} style={{ width: "200px", height: "120px" }} />
            <Text
              style={{
                fontSize: "9px",
                marginLeft: "250px",
                marginTop: "70px",
              }}
            >
              Print Date: &nbsp;&nbsp;{dateformat(new Date())}
            </Text>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={img2} />
          <Text
            style={{
              fontSize: "9px",
              marginLeft: "450px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Print Date: &nbsp;&nbsp;{dateformat(new Date())}
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={img3} />
          <Text
            style={{
              fontSize: "9px",
              marginLeft: "450px",
              marginTop: "80px",
              marginBottom: "20px",
            }}
          >
            Print Date: &nbsp;&nbsp;{dateformat(new Date())}
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={img4} />
          <Text
            style={{
              fontSize: "9px",
              marginLeft: "450px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Print Date: &nbsp;&nbsp;{dateformat(new Date())}
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={img5} />
          <Text
            style={{
              fontSize: "9px",
              marginLeft: "450px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Print Date: &nbsp;&nbsp;{dateformat(new Date())}
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={img6} />
          <Text
            style={{
              fontSize: "9px",
              marginLeft: "450px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Print Date: &nbsp;&nbsp;{dateformat(new Date())}
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={img7} />
          <Text
            style={{
              fontSize: "9px",
              marginLeft: "450px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Print Date: &nbsp;&nbsp;{dateformat(new Date())}
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="w-full">
      <div className="w-[87%] mx-auto ">
        <div className="flex justify-center text-2xl font-bold text-blue my-4">
          INBOUND TRAVEL ACCIDENT INSURANCE
        </div>
        <div className="bg-white rounded p-10 shadow-2xl rounded">
          <Form
            layout="vertical"
            name="form_in_modal"
            scrollToFirstError={true}
            initialValues={{
              modifier: "public",
            }}
            clearOnDestroy
            onFinish={(values) => searchProposal(values)}
            className="mb-5"
          >
            <div className="flex gap-5">
              <div className="w-1/2">
                <div className="text-xl text-blue font-semibold mb-3">
                  Passport Number <span className="text-red">*</span>
                </div>
                <Form.Item
                  name="passportNumber"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-xl">This field is required</span>
                      ),
                    },
                  ]}
                >
                  <Input
                    className="w-[80%] text-[17px] h-[42px]"
                    placeholder=". . ."
                    onInput={(e) =>
                      (e.target.value = e.target.value.toUpperCase())
                    }
                    onChange={(e) => setPassportNumber(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="w-1/2">
                <div className="text-xl text-blue font-semibold mb-3">
                  Passport Issued Country <span className="text-red">*</span>
                </div>
                <ConfigProvider
                  theme={{
                    token: {
                      fontSize: 17,
                    },
                    components: {
                      Select: {
                        optionFontSize: 17,
                      },
                    },
                  }}
                >
                  <Form.Item
                    name="passportIssuedCountry"
                    className="w-[80%]"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-xl">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Select
                      className="h-[42px]"
                      placeholder="SELECT ONE"
                      options={countryNameList}
                      onInput={(e) =>
                        (e.target.value = e.target.value.toUpperCase())
                      }
                      onChange={(value) => setPassportIssuedCountry(value)}
                      showSearch={true}
                    />
                  </Form.Item>
                </ConfigProvider>
              </div>
            </div>
            <div className="">
              <button
                className="bg-blue text-white text-xl px-8 py-2 rounded"
                type="submit"
              >
                Search
              </button>
            </div>
          </Form>
          {hasProposal && (
            <div className="">
              <div className="text-2xl text-blue font-semibold mb-5 tracking-[-0.035em]">
                Inbound Travel Accident Insurance Purchase History
              </div>
              <ConfigProvider
                theme={{
                  token: {
                    colorText: "#074ca1",
                  },
                  components: {
                    Table: {
                      /* here is your component tokens */
                      headerBg: "#074ca1",
                      headerColor: "#fff",
                    },
                  },
                }}
              >
                <Table dataSource={data} columns={columns} pagination={false} />
              </ConfigProvider>
            </div>
          )}
          {noRecord && <div className="text-red">No Records</div>}
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;

"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Select, Tooltip } from "antd";
import "antd/dist/reset.css";
import axios from "axios";

import Testimonials from "../../components/sharedSections/Testimonials";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ar from "date-fns/locale/ar";
import { useState, useEffect } from "react";
import LoadingButton from "@/components/ui/LoadingButton";
import Toast, { toast } from "@/components/ui/Toast";
import { ChevronDown } from "lucide-react";
import { sec_base_url } from "../../utils/base_url";

registerLocale("ar", ar);

const { Option } = Select;

const CustomDateTimeInput = ({ value, onClick }) => (
  <div
    className="glassy border py-0 min-h-[66px] focus:!border-blue-500 focus-visible:outline-none w-full focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition flex items-center px-4 cursor-pointer"
    onClick={onClick}
  >
    {value || "اختر تاريخ ووقت الحجز"}
  </div>
);

// Custom Select Component with matching design
const CustomSelect = ({
  placeholder,
  value,
  onChange,
  options,
  className = "",
  showSearch = true,
  searchPlaceholder = "البحث...",
  loading = false,

  ...props
}) => (
  <Select
    placeholder={placeholder}
    value={value || undefined}
    onChange={onChange}
    popupClassName="select-no-scrollchain"
    loading={loading}
    dropdownRender={(menu) => (
      <div onWheel={(e) => e.stopPropagation()}>{menu}</div>
    )}
    className={`custom-select w-full ${className}`}
    style={{
      height: "66px",
    }}
    dropdownStyle={{
      direction: "rtl",
      fontFamily: "inherit",
    }}
    // Enhanced filter function for better Arabic search
    showSearch={showSearch}
    filterOption={(input, option) => {
      const searchText = input.toLowerCase().trim();
      const label = option?.children || option?.label || "";

      // Search in Arabic and English
      return (
        label.toLowerCase().includes(searchText) ||
        label.includes(searchText) ||
        // Remove diacritics for better Arabic search
        label
          .normalize("NFD")
          .replace(/[\u064B-\u0652]/g, "")
          .toLowerCase()
          .includes(searchText)
      );
    }}
    // Add search placeholder
    searchValue={undefined}
    onSearch={() => {}}
    // Dropdown styling
    listHeight={200}
    dropdownMatchSelectWidth={true}
    // Show all options when dropdown opens
    defaultOpen={false}
    {...props}
  >
    {options?.map((option) => (
      <Option
        key={option.value}
        value={option.value}
        label={option.label}
        title={option.label} // Tooltip on hover
      >
        {option.label}
      </Option>
    ))}
  </Select>
);

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [visitType, setVisitType] = useState("first-time");
  const [loading, setLoading] = useState(false);
  const [showMoreFields, setShowMoreFields] = useState(false);

  // Form data for first-time patients (registration)
  const [registrationData, setRegistrationData] = useState({
    name: "",
    phone: "",
    address: "",
    gender: "",
    age: "",
    referralSource: "",
    complaint: "",
    condition: "",
    medicalHistory: "",
    chronicConditions: "",
    allergies: "",
    medications: "",
    message: "",
  });

  // Form data for returning patients (appointment booking)
  const [appointmentData, setAppointmentData] = useState({
    phone: "",
    examination: "",
    totalAmount: "",
    appointmentDateTime: new Date(),
    examinationType: "",
    paymentType: "",
    paidAmount: "",
    selectedDoctor: "", // Added doctor selection
    message: "",
  });

  // Dynamic examination types from API
  const [examinationTypes, setExaminationTypes] = useState([]);
  const [examinationPrices, setExaminationPrices] = useState({});

  useEffect(() => {
    console.log(examinationTypes, "examinationTypes");
  }, [examinationTypes]);

  // Doctors data from API
  const [doctors, setDoctors] = useState([]);
  const [doctorsLoading, setDoctorsLoading] = useState(false);

  const genderOptions = [
    { value: "ذكر", label: "ذكر" },
    { value: "انثي", label: "أنثى" },
  ];

  const referralSourceOptions = [
    { value: "وسائل التواصل الاجتماعي", label: "وسائل التواصل الاجتماعي" },
    { value: "صديق أو قريب", label: "صديق أو قريب" },
    { value: "طبيب آخر", label: "طبيب آخر" },
    { value: "إعلان", label: "إعلان" },
    { value: "محرك البحث", label: "محرك البحث" },
    { value: "أخرى", label: "أخرى" },
  ];

  const examinationTypeOptions = [
    { value: "new", label: "أول مرة" },
    { value: "Re-revel", label: "إعادة" },
  ];

  const paymentTypeOptions = [
    { value: "cash", label: "كشف كامل" },
    { value: "installment", label: "تقسيط" },
  ];

  const timeSlots = [];
  for (let hour = 2; hour < 8; hour++) {
    timeSlots.push(`${hour}:00 - ${hour}:30`);
    timeSlots.push(`${hour}:30 - ${hour + 1}:00`);
  }
  timeSlots.push("8:00 - 8:30");

  useEffect(() => {
    axios
      .get(sec_base_url + `/admin/doctors/select_doctors.php`)
      .then((res) => {
        if (res.data.status === "success") {
          setDoctors(res?.data?.massage);
        } else {
          toast.error(res.data.massage);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // Fetch materials from API
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get(
          `${sec_base_url}/admin/material/select_material.php`
        );

        if (response.data.status === "success") {
          const materials = response.data.message; // API returns data in message field

          // Convert materials to examination types format
          const formattedExaminations = materials.map((material) => ({
            value: material.name || material.material_id, // Use id or material_id based on API response
            label: `${material.name || material.material_name} - ${
              material.price || material.material_price
            } ج.م`,
          }));

          // Create prices object for easy lookup
          const pricesMap = {};
          materials.forEach((material) => {
            const name = material.name;
            const price = material.price || material.material_price;
            pricesMap[name] = parseFloat(price) || 0;
          });

          setExaminationTypes(formattedExaminations);
          setExaminationPrices(pricesMap);
        } else {
          toast.error("حدث خطأ أثناء تحميل أنواع الكشف");
          // Fallback to static data
          setExaminationTypes([
            { value: "consultation", label: "استشارة - 100 ج.م" },
            { value: "cleaning", label: "تنظيف أسنان - 200 ج.م" },
            { value: "filling", label: "حشوة - 300 ج.م" },
            { value: "extraction", label: "خلع - 150 ج.م" },
            { value: "root-canal", label: "علاج عصب - 500 ج.م" },
            { value: "orthodontics", label: "تقويم أسنان - 800 ج.م" },
          ]);
          setExaminationPrices({
            consultation: 100,
            cleaning: 200,
            filling: 300,
            extraction: 150,
            "root-canal": 500,
            orthodontics: 800,
          });
        }
      } catch (error) {
        console.error("Error fetching materials:", error);
        toast.error("حدث خطأ في الاتصال");
        // Fallback to static data
        setExaminationTypes([
          { value: "consultation", label: "استشارة - 100 ج.م" },
          { value: "cleaning", label: "تنظيف أسنان - 200 ج.م" },
          { value: "filling", label: "حشوة - 300 ج.م" },
          { value: "extraction", label: "خلع - 150 ج.م" },
          { value: "root-canal", label: "علاج عصب - 500 ج.م" },
          { value: "orthodontics", label: "تقويم أسنان - 800 ج.م" },
        ]);
        setExaminationPrices({
          consultation: 100,
          cleaning: 200,
          filling: 300,
          extraction: 150,
          "root-canal": 500,
          orthodontics: 800,
        });
      }
    };

    fetchMaterials();
  }, []);

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleRegistrationSelectChange = (name, value) => {
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
  };

  const handleAppointmentSelectChange = (name, value) => {
    if (name === "examination") {
      const price = examinationPrices[value] || "";
      setAppointmentData({
        ...appointmentData,
        [name]: value,
        totalAmount: price.toString(),
      });
    } else {
      setAppointmentData({
        ...appointmentData,
        [name]: value,
      });
    }
  };

  // API call functions using axios
  const addPatient = async (patientData) => {
    const response = await axios.post(
      `${sec_base_url}/admin/patient/add_patient.php`,
      patientData
    );
    return response.data;
  };

  const addAppointment = async (appointmentData) => {
    const response = await axios.post(
      `${sec_base_url}/admin/appointments/add_appointment.php`,
      appointmentData
    );
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (visitType === "first-time") {
        // Validation for registration
        if (
          !registrationData.name ||
          !registrationData.phone ||
          !registrationData.address ||
          !registrationData.gender ||
          !registrationData.age ||
          !registrationData.referralSource ||
          !registrationData.complaint
        ) {
          toast.error("يرجى ملء جميع الحقول المطلوبة");
          setLoading(false);
          return;
        }

        // Prepare patient data according to API structure
        const patientData = {
          name: registrationData.name || null,
          gender: registrationData.gender || null,
          age: registrationData.age || null,
          phone: registrationData.phone || null,
          address: registrationData.address || null,
          knownSource: registrationData.referralSource || null,
          status: registrationData.condition || null,
          medicalIssue: registrationData.complaint || null,
          xray: null, // Not in form
          before: null, // Not in form
          after: null, // Not in form
          medications: registrationData.medications || null,
          allergies: registrationData.allergies || null,
          chronic_conditions: registrationData.chronicConditions || null,
          medical_history: registrationData.medicalHistory || null,
        };

        // Call API to add patient
        const result = await addPatient(patientData);

        if (result.status === "success") {
          toast.success("تم تسجيل بياناتك بنجاح، أهلاً بك في عيادة True Smile");
          setVisitType("returning");

          // Reset registration form
          setRegistrationData({
            name: "",
            phone: "",
            address: "",
            gender: "",
            age: "",
            referralSource: "",
            complaint: "",
            condition: "",
            medicalHistory: "",
            chronicConditions: "",
            allergies: "",
            medications: "",
            message: "",
          });
          setShowMoreFields(false);
        } else {
          toast.error(result.message || "حدث خطأ أثناء تسجيل البيانات");
        }
      } else if (visitType === "returning") {
        // Validation for appointment booking
        if (
          !appointmentData.phone ||
          !appointmentData.examination ||
          !appointmentData.appointmentDateTime ||
          !appointmentData.examinationType ||
          !appointmentData.paymentType ||
          !appointmentData.selectedDoctor // Added doctor validation
        ) {
          toast.error("يرجى ملء جميع الحقول المطلوبة");
          setLoading(false);
          return;
        }

        // Additional validation for installment payment
        if (
          appointmentData.paymentType === "installment" &&
          appointmentData.examinationType === "new" &&
          !appointmentData.paidAmount
        ) {
          toast.error("يرجى إدخال المبلغ المدفوع");
          setLoading(false);
          return;
        }

        // Format date for API (YYYY-MM-DD HH:MM:SS)
        const formattedDate = appointmentData.appointmentDateTime
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");

        const appointmentApiData = {
          phone: appointmentData.phone,
          appointment_doc_id: appointmentData.selectedDoctor,
          appointment_date: formattedDate,
          appointment_type: appointmentData.examination || null,
          payment_type: appointmentData.paymentType || null,
          type: appointmentData.examinationType || null,
          amount:
            appointmentData.paymentType == "cash"
              ? appointmentData.totalAmount
              : appointmentData.paidAmount || 0,
          total_amount:
            appointmentData.paymentType == "cash"
              ? 0
              : appointmentData.totalAmount || null,
        };

        const result = await addAppointment(appointmentApiData);

        if (result.status === "success") {
          toast.success(result.message);

          // Reset appointment form
          setAppointmentData({
            phone: "",
            examination: "",
            totalAmount: "",
            appointmentDateTime: new Date(),
            examinationType: "",
            paymentType: "",
            paidAmount: "",
            selectedDoctor: "", // Reset doctor selection
            message: "",
          });
        } else {
          toast.error(result.message || "حدث خطأ أثناء حجز الموعد");
        }
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-[#ffffff61]">
      <style jsx global>{`
        .custom-select .ant-select-selector {
          background-color: #ffff0019 !important;
          backdrop-filter: blur(2.5px) !important;
          -webkit-backdrop-filter: blur(4.5px) !important;
          border-radius: 20px !important;
          border: 1px solid #f0d000 !important;
          overflow: hidden !important;
          height: 66px !important;
          padding: 0 20px !important;
          transition: all 0.3s ease !important;
          direction: rtl !important;
        }

        .custom-select .ant-select-selector:hover {
          border-color: #f0d000 !important;
          transform: scale(1.03) !important;
        }

        .custom-select.ant-select-focused .ant-select-selector {
          border-color: #f0d000 !important;
          transform: scale(1.03) !important;
          box-shadow: 0 4px 16px 0 rgba(255, 193, 7, 0.5) !important;
        }

        .custom-select .ant-select-selection-placeholder {
          color: #000 !important;
          opacity: 0.7 !important;
          right: 20px !important;
          left: auto !important;
          line-height: 64px !important;
        }

        .custom-select .ant-select-selection-item {
          color: #000 !important;
          line-height: 64px !important;
          padding-right: 0 !important;
          padding-left: 11px !important;
        }

        .custom-select .ant-select-arrow {
          right: auto !important;
          left: 20px !important;
          color: #000 !important;
        }

        .ant-select-item-option-content {
          font-size: 15px;
        }

        .ant-select-item {
          color: #000 !important;
          text-align: right !important;
          padding: 8px 20px !important;
          backdrop-filter: blur(2.5px) !important;
        }

        .ant-select-item:hover {
          background-color: rgba(240, 208, 0, 0.15) !important;
        }

        /* Custom scrollbar for dropdown */
        .ant-select-dropdown .rc-virtual-list-scrollbar {
          width: 6px !important;
        }

        .ant-select-dropdown .rc-virtual-list-scrollbar-thumb {
          background-color: rgba(240, 208, 0, 0.5) !important;
          border-radius: 3px !important;
        }
      `}</style>

      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="احجز كشف">
        {/*Book Service Start*/}
        <section
          className="book-service bg-transparent"
          style={{
            backgroundImage: "url(`/assets/images/ttten-2.svg`)",
          }}
        >
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">لنعالج ابتسامتك</span>
              <h2 className="section-title__title">
                أخبرنا بالخدمة التي تحتاج إليها
              </h2>
            </div>

            <div className="contact-page__left glassy-1 !overflow-visible">
              <div className="flex items-center justify-between">
                <h3 className="contact-page__title">تواصل معنا</h3>
              </div>

              <form
                onSubmit={handleSubmit}
                className="contact-page__form contact-form-validated"
              >
                {/* Visit Type Selection - Checkbox Style */}
                {/* Visit Type Selection - Minimal Style */}
                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact-page__form-input-box">
                      <h4 className="mb-4 text-lg font-semibold">
                        نوع الزيارة
                      </h4>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="visitType"
                            value="first-time"
                            checked={visitType === "first-time"}
                            onChange={(e) => setVisitType(e.target.value)}
                            className="sr-only"
                          />
                          <div className="relative">
                            <div
                              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 backdrop-blur-sm ${
                                visitType === "first-time"
                                  ? "border-[#f0d000] bg-[#f0d000] shadow-lg scale-110"
                                  : "border-gray-300 group-hover:border-[#f0d000] group-hover:scale-105"
                              }`}
                            >
                              {visitType === "first-time" && (
                                <div className="absolute inset-1 bg-white rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <span
                            className={`text-lg transition-colors duration-200 `}
                          >
                            أول مرة
                          </span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="visitType"
                            value="returning"
                            checked={visitType === "returning"}
                            onChange={(e) => setVisitType(e.target.value)}
                            className="sr-only"
                          />
                          <div className="relative">
                            <div
                              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 backdrop-blur-sm ${
                                visitType === "returning"
                                  ? "border-[#f0d000] bg-[#f0d000] shadow-lg scale-110"
                                  : "border-gray-300 group-hover:border-[#f0d000] group-hover:scale-105"
                              }`}
                            >
                              {visitType === "returning" && (
                                <div className="absolute inset-1 bg-white rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <span
                            className={`text-lg transition-colors duration-200 `}
                          >
                            مريض سابق
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* First Time Patient Registration Form */}
                {visitType === "first-time" && (
                  <div className="row">
                    <div className="col-xl-12 mb-4">
                      <h4 className="text-lg font-semibold text-blue-600">
                        تسجيل مريض جديد
                      </h4>
                    </div>

                    {/* Name */}
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input
                          type="text"
                          placeholder="الاسم"
                          name="name"
                          value={registrationData.name}
                          onChange={handleRegistrationChange}
                          className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input
                          placeholder="رقم الهاتف"
                          name="phone"
                          value={registrationData.phone}
                          onChange={handleRegistrationChange}
                          className="glassy border w-full focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          required
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="col-xl-12">
                      <div className="contact-page__form-input-box">
                        <input
                          type="text"
                          placeholder="العنوان"
                          name="address"
                          value={registrationData.address}
                          onChange={handleRegistrationChange}
                          className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          required
                        />
                      </div>
                    </div>

                    {/* Gender and Age */}
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <CustomSelect
                          placeholder="نوع المريض"
                          value={registrationData.gender}
                          onChange={(value) =>
                            handleRegistrationSelectChange("gender", value)
                          }
                          options={genderOptions}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input
                          type="number"
                          placeholder="عمر المريض"
                          name="age"
                          value={registrationData.age}
                          onChange={handleRegistrationChange}
                          className="glassy w-full border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          required
                          min="1"
                          max="120"
                        />
                      </div>
                    </div>

                    {/* Referral Source */}
                    <div className="col-xl-12">
                      <div className="contact-page__form-input-box">
                        <CustomSelect
                          placeholder="مصدر المعرفة بالمركز"
                          value={registrationData.referralSource}
                          onChange={(value) =>
                            handleRegistrationSelectChange(
                              "referralSource",
                              value
                            )
                          }
                          options={referralSourceOptions}
                        />
                      </div>
                    </div>

                    {/* Patient Complaint - Always visible */}
                    <div className="col-xl-12">
                      <div className="contact-page__form-input-box text-message-box">
                        <textarea
                          name="complaint"
                          placeholder="شكوى المريض"
                          value={registrationData.complaint}
                          onChange={handleRegistrationChange}
                          className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          rows="2"
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* Additional Fields with Animation */}
                    <AnimatePresence>
                      {showMoreFields && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="col-xl-12 overflow-hidden"
                        >
                          <div className="row">
                            {/* Optional Fields */}
                            <div className="col-xl-6">
                              <div className="contact-page__form-input-box text-message-box">
                                <textarea
                                  name="condition"
                                  placeholder="حالة المريض"
                                  value={registrationData.condition}
                                  onChange={handleRegistrationChange}
                                  className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                                  rows="1"
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="contact-page__form-input-box text-message-box">
                                <textarea
                                  name="medicalHistory"
                                  placeholder="التاريخ المرضي"
                                  value={registrationData.medicalHistory}
                                  onChange={handleRegistrationChange}
                                  className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                                  rows="1"
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="contact-page__form-input-box text-message-box">
                                <textarea
                                  name="chronicConditions"
                                  placeholder="الحالات المزمنة"
                                  value={registrationData.chronicConditions}
                                  onChange={handleRegistrationChange}
                                  className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                                  rows="1"
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="contact-page__form-input-box text-message-box">
                                <textarea
                                  name="allergies"
                                  placeholder="الحساسيات"
                                  value={registrationData.allergies}
                                  onChange={handleRegistrationChange}
                                  className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                                  rows="1"
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="contact-page__form-input-box text-message-box">
                                <textarea
                                  name="medications"
                                  placeholder="الأدوية المستخدمة"
                                  value={registrationData.medications}
                                  onChange={handleRegistrationChange}
                                  className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                                  rows="1"
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="contact-page__form-input-box text-message-box">
                                <textarea
                                  name="message"
                                  placeholder="تعليق إضافي"
                                  value={registrationData.message}
                                  onChange={handleRegistrationChange}
                                  className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                                  rows="1"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Toggle Button for Additional Fields */}
                    <div className="col-xl-12">
                      <div className="flex justify-center mb-4">
                        <motion.button
                          type="button"
                          onClick={() => setShowMoreFields(!showMoreFields)}
                          className="!flex !items-center gap-2 thm-btn relative contact-page__btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>
                            {showMoreFields ? "عرض أقل" : "عرض المزيد"}
                          </span>
                          <motion.span
                            animate={{ rotate: showMoreFields ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown />
                          </motion.span>
                        </motion.button>
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="contact-page__btn-box !flex !items-center !justify-between">
                        <LoadingButton
                          type="submit"
                          loading={loading}
                          className="contact-page__btn"
                        >
                          تسجيل مريض جديد
                        </LoadingButton>
                      </div>
                    </div>
                  </div>
                )}

                {/* Returning Patient Appointment Form */}
                {visitType === "returning" && (
                  <div className="row">
                    <div className="col-xl-12 mb-4">
                      <h4 className="text-lg font-semibold text-green-600">
                        حجز موعد
                      </h4>
                    </div>

                    {/* Phone Number */}
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input
                          placeholder="رقم الهاتف"
                          name="phone"
                          value={appointmentData.phone}
                          onChange={handleAppointmentChange}
                          className="glassy w-full border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          required
                        />
                      </div>
                    </div>

                    {/* Doctor Selection */}
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <CustomSelect
                          placeholder="اختر الطبيب"
                          showSearch={true}
                          value={appointmentData.selectedDoctor}
                          onChange={(value) =>
                            handleAppointmentSelectChange(
                              "selectedDoctor",
                              value
                            )
                          }
                          options={doctors?.map((e) => ({
                            label: `${e.doctor_name} - ${e.doctor_spscialise}`,
                            value: e.doctor_id,
                          }))}
                          loading={doctorsLoading}
                        />
                      </div>
                    </div>

                    {/* Examination Type - Dynamic from API */}
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <CustomSelect
                          placeholder="اختر نوع الكشف"
                          showSearch={true}
                          value={appointmentData.examination}
                          onChange={(value) =>
                            handleAppointmentSelectChange("examination", value)
                          }
                          options={examinationTypes}
                          loading={examinationTypes.length === 0}
                        />
                      </div>
                    </div>

                    {/* Total Amount (Disabled) */}
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input
                          type="number"
                          placeholder="المبلغ الكلي"
                          name="totalAmount"
                          value={appointmentData.totalAmount}
                          className="glassy w-full border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition bg-gray-100"
                          disabled
                        />
                      </div>
                    </div>

                    {/* Appointment Date and Time */}
                    <div className="col-xl-12">
                      <div className="contact-page__form-input-box">
                        <DatePicker
                          selected={appointmentData.appointmentDateTime}
                          onChange={(date) =>
                            setAppointmentData({
                              ...appointmentData,
                              appointmentDateTime: date,
                            })
                          }
                          locale="ar"
                          dateFormat="dd/MM/yyyy"
                          customInput={<CustomDateTimeInput />}
                          calendarClassName="rtl"
                          minDate={new Date()}
                        />
                      </div>
                    </div>

                    {/* Examination Category */}
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <CustomSelect
                          placeholder="نوع الكشف"
                          value={appointmentData.examinationType}
                          onChange={(value) =>
                            handleAppointmentSelectChange(
                              "examinationType",
                              value
                            )
                          }
                          options={examinationTypeOptions}
                        />
                      </div>
                    </div>

                    {/* Payment Type */}
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <CustomSelect
                          placeholder="نوع الدفع"
                          value={appointmentData.paymentType}
                          onChange={(value) =>
                            handleAppointmentSelectChange("paymentType", value)
                          }
                          options={paymentTypeOptions}
                        />
                      </div>
                    </div>

                    {/* Paid Amount (Conditional) */}
                    {appointmentData.paymentType === "installment" &&
                      appointmentData.examinationType === "new" && (
                        <div className="col-xl-12">
                          <Tooltip title="ادفع جزء من المبلغ الكلي ف العياده">
                            <div className="contact-page__form-input-box">
                              <input
                                type="number"
                                placeholder="المبلغ المدفوع"
                                name="paidAmount"
                                value={appointmentData.paidAmount}
                                onChange={handleAppointmentChange}
                                className="glassy border w-full focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                                required
                                min="0"
                                max={appointmentData.totalAmount}
                              />
                            </div>
                          </Tooltip>
                        </div>
                      )}

                    {/* Additional Message */}
                    <div className="col-xl-12">
                      <div className="contact-page__form-input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="تعليق إضافي"
                          value={appointmentData.message}
                          onChange={handleAppointmentChange}
                          className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          rows="1"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="contact-page__btn-box !flex !items-center !justify-between">
                        <LoadingButton
                          type="submit"
                          loading={loading}
                          className="contact-page__btn"
                        >
                          حجز موعد
                        </LoadingButton>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="book-service">
          <div
            className="book-service__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/book-services-bg-img-1.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 h-full col-lg-6">
                <div className="book-service__left">
                  <div className="section-title text-right">
                    <span className="section-title__tagline">احجز موعد</span>
                    <h2 className="section-title__title">
                      خيارات علاج مرنة
                      <br /> تناسبك
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 h-full">
                      <div className="book-service__single h-full min-h-[250px]">
                        <div className="book-service__icon">
                          <span className="icon-calendar"></span>
                        </div>
                        <h3 className="book-service__title">فحص دوري</h3>
                        <p className="book-service__text">
                          نقدم فحوصات شاملة لضمان صحة أسنانك واستمرار ابتسامتك.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 h-full">
                      <div className="book-service__single h-full min-h-[250px]">
                        <div className="book-service__icon">
                          <span className="icon-low-price"></span>
                        </div>
                        <h3 className="book-service__title">أسعار مناسبة</h3>
                        <p className="book-service__text">
                          خدمات سنية عالية الجودة بأسعار منافسة دون رسوم مخفية.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 h-full">
                      <div className="book-service__single h-full min-h-[250px]">
                        <div className="book-service__icon">
                          <span className="icon-delivery-man"></span>
                        </div>
                        <h3 className="book-service__title">رعاية عاجلة</h3>
                        <p className="book-service__text">
                          خدمات طوارئ للأسنان بتدخل سريع لاستعادة راحة فمك.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 h-full">
                      <div className="book-service__single h-full min-h-[250px]">
                        <div className="book-service__icon">
                          <span className="icon-headphones"></span>
                        </div>
                        <h3 className="book-service__title">دعم 24/7</h3>
                        <p className="book-service__text">
                          فريقنا جاهز للرد على استفساراتك في أي وقت.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 h-full col-lg-6">
                <div className="book-service__right">
                  <p className="book-service__right-text ">
                    في عيادة True Smile، ندرك أهمية ابتسامتك وصحة فمك — لذلك
                    نوفر أفضل الخدمات السنية بأعلى معايير الجودة.
                  </p>
                  <div className="book-service__right-img">
                    <img
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752395483/ozkan-guner-KRJwZrjuKpE-unsplash_11zon_mobcoo.jpg"
                      alt="صورة لعيادة True Smile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Two Start */}
        <section className="contact-two">
          <div
            className="contact-two-bg jarallax"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398655/4_wthzyt.png)",
            }}
          ></div>
          <div className="container">
            <div className="contact-two__inner">
              <div className="section-title section-title--two text-center">
                <span className="section-title__tagline">تواصل معنا</span>
                <h2 className="section-title__title">
                  دعنا نتحدث – نحن هنا لمساعدتك
                </h2>
                <p className="section-title__text">
                  هل لديك سؤال أو تحتاج لتقدير تكلفة العلاج؟ اترك لنا رسالة أو
                  اتصل بنا — وسنعاود التواصل بسرعة.
                </p>
              </div>
              <div className="contact-two__details-box">
                <ul className="list-unstyled contact-two__details">
                  <li>
                    <div className="icon">
                      <span className="fa fa-envelope"></span>
                    </div>
                    <div className="content">
                      <span>أرسل لنا بريدًا إلكترونيًا</span>
                      <p>
                        <Link href="mailto:sagedloai884@gmail.com">
                          sagedloai884@gmail.com
                        </Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="content">
                      <span>اتصل بنا</span>
                      <p>
                        <Link href="tel:0123456789">0123 456 789</Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*Contact Two  End*/}
        <Testimonials />
        {/*Testimonial One End*/}
      </Layout>
    </div>
  );
}

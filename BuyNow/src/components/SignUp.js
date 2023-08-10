import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import "./formInput.css";

import {
  FormSection1,
  FormSection2,
  FormSection3,
  FormSection4,
  FormSection5,
  FormSection6,
  FormSection7,
  // Residence2,
} from "./FormSections";

// import {

// }
// import  from "./FormSection2";

import { useRef, useState } from "react";

// ANOTHER ONE HERE FOR THE VEHICLES RESULTS PAGE

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    location: "",
    hearAbout: "",
    promoCode: "",
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    home: "",
    salesperson: "",

    // CURRENT Address Fields - to be put into single 'currAddress' object/property here

    currAddress: { streetAddress: "", apt: "", city: "", state: "", zip: "" },
    prevAddress: { streetAddress: "", apt: "", city: "", state: "", zip: "" },

    // OPTIONAL ADD'L (previous) Address Fields - its html made viewbale inside of FormSection1 by clicking a button- to be put into 'prevAddress' object/property here.

    currentAddress: true, // <-- what's the point here? all currAddress fields required anyway
    residenceStatus: "",
    liveWithStatus: "",
    moveInDate: { year: "", month: "" },
    moveOutDate: { year: "", month: "" },
    birthday: { year: [], month: [], day: [] },
    ssn: "",
    leasedBefore: "",
    liveInArea: "",
    creditScoreEst: [425],
    payAwayEnroll: false,

    // Driver Info
    driversLicenseNum: "",
    driversLicenseState: "",
    driversLicenseExp: { year: [], month: [], day: [] },
    mortgageLeaseName: "",
    mortgageLeaseMonthlyPmt: "",
    landlordLenderName: "",
    landlordLenderPhone: "",
    landlordLenderStreet: "",
    landlordLenderCity: "",
    landlordLenderState: "",
    landlordLenderZip: "",

    // Employer Info
    employerName: "",
    supervisorName: "",
    employerPhone: "",
    employerStreet: "",
    employerCity: "",
    employerState: "",
    employerZip: "",
    currentEmployer: true,
    employmentType: "",
    paySchedule: "",
    employerHourlyRate: "",
    employerHoursPerWeek: "",
    nextPayDate: "",
    employerStartDate: { year: "", month: "" },
    employerEndDate: { year: "", month: "" },
    employerCheckAmt: "",
    employerNextPayDate: "" /*USE CALENDAR*/,

    // References
    refFirstName: "",
    refMiddleName: "",
    refLastName: "",
    refRelationship: "",
    refMobile: "",
    refHome: "",
    refWork: "",
    refAddress: { streetAddress: "", apt: "", city: "", state: "", zip: "" },

    //Financial info
    primeMoIncomePreTax: "",
    otherMoIncome: "",
    maritalStatus: "",
    numDependents: "",
    bankruptcyFiled: "",
    bankruptcyFileDate: "", //need funcitno to only require this on once a yes is gotten on  'bankruptcyFiled
    bankruptcyYearsSince: "",
    bankruptcyMonthsSince: "",
    repoJudgeLien: false,
    repoFilingDate: "", // same here
    availDownPmt: "",
  });

  const [isFormActive, setIsFormActive] = useState(false);

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(formData);
    // console.log(e.target.values);
  };

  // Function to handle "Next" button click
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const onChange = function (e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalSteps = 7;

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* PERSONAL INFO (including address) */}
        {currentStep === 1 && (
          <FormSection1
            formData={formData}
            onChange={onChange}
            setFormData={setFormData}
          />
        )}
        {/* DRIVERS LICENSE */}
        {currentStep === 2 && (
          <FormSection2
            formData={formData}
            onChange={onChange}
            // setFormData={setFormData}
          />
        )}
        {/* RESIDENCY + LANDLORD INFO */}
        {currentStep === 3 && (
          <FormSection3
            formData={formData}
            onChange={onChange}
            setFormData={setFormData}
          />
        )}
        {/* EMPLOYMENT INFO */}
        {currentStep === 4 && (
          <FormSection4
            formData={formData}
            onChange={onChange}
            setFormData={setFormData}
          />
        )}
        {/* REFERENCES */}
        {currentStep === 5 && (
          <FormSection5
            formData={formData}
            onChange={onChange}
            setFormData={setFormData}
          />
        )}
        {/* FINANCIAL INFO */}
        {currentStep === 6 && (
          <FormSection6
            formData={formData}
            onChange={onChange}
            setFormData={setFormData}
          />
        )}
        {/* REVIEW PAGE */}
        {currentStep === 7 && (
          <FormSection7
            formData={formData}
            onChange={onChange}
            setFormData={setFormData}
          />
        )}

        {/* <button className="submit">Submit</button>
        <button className="clear">Clear All</button> */}
        {currentStep > 1 && (
          <button type="button" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {currentStep < totalSteps && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}
        {currentStep === totalSteps && (
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

// onChange({
//   target: {
//     name: "birthday",
//     value: {
//       ...formData.birthday,
//       day: day,
//       month: month,
//       year: year,
//     },
//   },
// });

import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

// import CustomHeader from "./CustomHeader";
import "../index.css";
// import { Range, useSlider, getTrackBackground } from "react-range";
import CollapsibleSlider from "./CollapsibleSlider";

let residence = [
  "I own my home",
  "I rent an apartment",
  "I rent a house",
  "I am currently purchasing a home",
  "I live with relatives",
  "Other",
];

let relationship = [
  "spouse",
  "parent",
  "grandparent",
  "brother",
  "sister",
  "friend",
  "coworker",
  "boss",
  "other",
];

let maritalStatus = ["Not Married", "Married"];

let bankruptcyFiled = [
  "no",
  "Chapter 7, NOT discharged",
  "Chapter 7, discharged",
  "Chapter 13, claim Unfiled",
  "Chapter 13, claim Filed",
];

let liveWith = ["Relatives", "Friends", "Parents", "Spouse", "Alone"];

let paySchedule = ["Weekly", "BiWeekly", "Semi-Monthly", "Monthly"];

let employmentTypes = ["Full Time", "Part Time", "other"];

let state = [
  "AK - Alaska",
  "AL - Alabama",
  "AR - Arkansas",
  "AS - American Samoa",
  "AZ - Arizona",
  "CA - California",
  "CO - Colorado",
  "CT - Connecticut",
  "DC - District of Columbia",
  "DE - Delaware",
  "FL - Florida",
  "GA - Georgia",
  "GU - Guam",
  "HI - Hawaii",
  "IA - Iowa",
  "ID - Idaho",
  "IL - Illinois",
  "IN - Indiana",
  "KS - Kansas",
  "KY - Kentucky",
  "LA - Louisiana",
  "MA - Massachusetts",
  "MD - Maryland",
  "ME - Maine",
  "MI - Michigan",
  "MN - Minnesota",
  "MO - Missouri",
  "MS - Mississippi",
  "MT - Montana",
  "NC - North Carolina",
  "ND - North Dakota",
  "NE - Nebraska",
  "NH - New Hampshire",
  "NJ - New Jersey",
  "NM - New Mexico",
  "NV - Nevada",
  "NY - New York",
  "OH - Ohio",
  "OK - Oklahoma",
  "OR - Oregon",
  "PA - Pennsylvania",
  "PR - Puerto Rico",
  "RI - Rhode Island",
  "SC - South Carolina",
  "SD - South Dakota",
  "TN - Tennessee",
  "TX - Texas",
  "UT - Utah",
  "VA - Virginia",
  "VI - Virgin Islands",
  "VT - Vermont",
  "WA - Washington",
  "WI - Wisconsin",
  "WV - West Virginia",
  "WY - Wyoming",
];

let stateOptions = state.map((stateItem) => (
  <option value={stateItem} key={stateItem}>
    {stateItem}
  </option>
));

// console.log(stateOptions);

let residenceOptions = residence.map((residenceType) => (
  <option value={residenceType} key={residenceType}>
    {residenceType}
  </option>
));

let liveWithOptions = liveWith.map((person) => (
  <option value={person} key={person}>
    {person}
  </option>
));

let employmentTypeOptions = employmentTypes.map((type) => (
  <option value={type} key={type}>
    {type}
  </option>
));

let payScheduleOptions = paySchedule.map((type) => (
  <option value={type} key={type}>
    {type}
  </option>
));

let relationshipOptions = relationship.map((relItem) => (
  <option value={relItem} key={relItem}>
    {relItem}
  </option>
));

let maritalOptions = maritalStatus.map((status) => (
  <option value={status} key={status}>
    {status}
  </option>
));

let bankruptcyOptions = bankruptcyFiled.map((status) => (
  <option value={status} key={status}>
    {status}
  </option>
));

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const justMonthsOptions = [...months.map((month) => month.label)];
// console.log(justMonths);

const daysInMonth = {
  "01": 31,
  "02": (year) => {
    // Check if it's a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  },
  "03": 31,
  "04": 30,
  "05": 31,
  "06": 30,
  "07": 31,
  "08": 31,
  "09": 30,
  10: 31,
  11: 30,
  12: 31,
};

function formatPhoneNumber(inputValue) {
  const cleanedValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
  const match = cleanedValue.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]})-${match[2]}-${match[3]}`;
  }
  return inputValue;
}

function formatSSN(inputValue) {
  const cleanedValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
  const match = cleanedValue.match(/^(\d{3})(\d{2})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return inputValue;
}

export const FormSection1 = ({ formData, setFormData, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleLocationChange = (e) => {
    // Update the formData with the selected location
    onChange({
      target: {
        name: "location",
        value: e.target.value,
      },
    });
  };

  const handleHearAboutChange = (e) => {
    console.log(e.target.value);
    // Update the formData with the selected location
    onChange({
      target: {
        name: "hearAbout",
        value: e.target.value,
      },
    });
  };

  ///////////////

  const handleStateChangeCurr = (e) => {
    // Update the formData with the selected location
    onChange({
      target: {
        name: "currAddress",
        value: {
          ...formData.currAddress,
          state: e.target.value,
        },
      },
    });
  };

  const handleStateChangePrev = (e) => {
    // Update the formData with the selected location
    onChange({
      target: {
        name: "prevAddress",
        value: {
          ...formData.prevAddress,
          state: e.target.value,
        },
      },
    });
  };

  ////////////

  const handleLeasedBeforeChange = (e) => {
    // Update the formData with the selected location
    const value = e.target.value;
    onChange({
      target: {
        name: "leasedBefore",
        value: e.target.value,
      },
    });
  };

  const handleLiveInArea = (e) => {
    // Update the formData with the selected location
    onChange({
      target: {
        name: "liveInArea",
        value: e.target.value,
      },
    });
  };

  const handleCreditScoreEst = (newValues) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      creditScoreEst: newValues[0],
    }));
  };

  const handlePayAwayEnrollChange = (e) => {
    // Update the formData with the checked status of the "Pay-A-Way" checkbox
    onChange({
      target: {
        name: "payAwayEnroll",
        value: e.target.checked,
      },
    });
  };

  //   BIRTHDAY CALENDAR EVENT HANDLER
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      //   console.log(month);
      const year = date.getFullYear();
      onChange({
        target: {
          name: "birthday",
          value: {
            ...formData.birthday,
            day: day,
            month: month,
            year: year,
          },
        },
      });
    } else {
      // Handle the case when the user clears the date
      onChange({
        target: {
          name: "birthday",
          value: {
            day: null,
            month: null,
            year: null,
          },
        },
      });
    }
  };

  const handleCurrAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      currAddress: {
        ...prevFormData.currAddress,
        [name]: value,
      },
    }));
  };

  const handlePrevAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      prevAddress: {
        ...prevFormData.prevAddress,
        [name]: value,
      },
    }));
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);

    onChange({
      target: {
        name: name,
        value: formattedValue,
      },
    });
  };

  // ////////////////////////// RETURNED HTML /////////////////////////////////////////////////

  return (
    <div className=" FormSection FormSection1">
      <h2>Dealership Information</h2>
      <p>Which location is most convenient for you?</p>
      <label htmlFor="location" className="city birmingham">
        <input
          type="radio"
          name="location"
          value="Birmingham"
          checked={formData.location === "Birmingham"}
          onChange={handleLocationChange}
        />
        {/* Birmingham */}
      </label>
      <label htmlFor="location" className="city diberville">
        <input
          type="radio"
          name="location"
          value="DIberville"
          checked={formData.location === "DIberville"}
          onChange={handleLocationChange}
        />
        {/* D'Iberville */}
      </label>
      <label htmlFor="location" className="city douglasville">
        <input
          type="radio"
          name="location"
          value="Douglasville"
          checked={formData.location === "Douglasville"}
          onChange={handleLocationChange}
        />
        {/* Douglasville */}
      </label>
      <label htmlFor="location" className="city montgomery">
        <input
          type="radio"
          name="location"
          value="Montgomery"
          checked={formData.location === "Montgomery"}
          onChange={handleLocationChange}
        />
        {/* Montgomery */}
      </label>
      <label htmlFor="hearAbout" className="hearAbout">
        <h3>How did you hear about us?</h3>
        <select
          className="dropdown"
          id="hearAbout"
          name="hearAbout"
          value={formData.hearAbout}
          onChange={handleHearAboutChange}
        >
          <option value="">Select an option</option>
          <option className="custom-dropdown" value="former customer">
            Former Customer
          </option>
          <option className="custom-dropdown" value="auto dealer">
            Auto Dealer
          </option>
          <option className="custom-dropdown" value="customer recommend">
            Customer Recommend
          </option>
          <option className="custom-dropdown" value="website">
            Website
          </option>
          <option className="custom-dropdown" value="search engine">
            Search Engine
          </option>
          <option className="custom-dropdown" value="radio">
            Radio
          </option>
          <option className="custom-dropdown" value="word of mouth">
            Word of Mouth
          </option>
          <option className="custom-dropdown" value="facebook">
            Facebook
          </option>
          <option className="custom-dropdown" value="instagram">
            Instagram
          </option>
          <option className="custom-dropdown" value="youtube">
            Youtube
          </option>
          <option className="custom-dropdown" value="spotify">
            Spotify
          </option>
        </select>
      </label>
      <label htmlFor="promoCode">
        <input
          type="text"
          name="promoCode"
          value={formData.promoCode}
          onChange={onChange}
          placeholder="Promo Code (optional)"
        />
      </label>
      <label htmlFor="salesperson">
        <select
          className="dropdown"
          id="salesperson"
          name="salesperson"
          value={formData.salesperson}
          onChange={onChange}
        >
          <option value="">Salesperson (optional)</option>
          {/******* ALL SALESPERSONS HERE ***********/}
          <option className="custom-dropdown" value="Person1">
            Person1
          </option>
          <option className="custom-dropdown" value="Person2">
            Person2
          </option>
        </select>
      </label>
      {/* --------------MIDDLE 'PERSONAL INFORMATION' SECTION OF FORMSECTION1 ------------ */}
      <h2>Personal Information</h2>
      <label htmlFor="firstname">
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={onChange}
          placeholder="First Name"
        />
      </label>
      <label htmlFor="lastname">
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={onChange}
          placeholder="Last Name"
        />
      </label>
      {/**********************  CURRENT ADDRESS PROPERTIES REQ'D **********************/}
      <label htmlFor="streetAddress">
        <input
          type="text"
          name="streetAddress"
          value={formData.currAddress.streetAddress}
          onChange={handleCurrAddressChange}
          placeholder="Street Address"
        />
      </label>
      <label htmlFor="apt">
        <input
          type="text"
          name="apt"
          value={formData.currAddress.apt}
          onChange={handleCurrAddressChange}
          placeholder="Apt #"
        />
      </label>
      <label htmlFor="city">
        <input
          type="text"
          name="city"
          value={formData.currAddress.city}
          onChange={handleCurrAddressChange}
          placeholder="City"
        />
      </label>
      <label htmlFor="stateCurr" className="state currAddressState">
        <select
          className="dropdown"
          id="stateCurr"
          value={formData.currAddress.state}
          onChange={handleStateChangeCurr} //<--- this needs to be incorporated into the 'handleCurrAddressChange' and 'handlePrevAddressChange' callbacks(?)
        >
          <option value="">State</option>
          {stateOptions}
        </select>
      </label>
      <label htmlFor="zip">
        <input
          type="text"
          name="zip"
          value={formData.currAddress.zip}
          onChange={handleCurrAddressChange}
          placeholder="Zip"
        />
      </label>
      <h3>Mobile</h3>
      <label htmlFor="mobile">
        <input
          id="phone-mobile"
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handlePhoneChange}
          placeholder="(000)-000-0000"
        />
      </label>
      <h3>Home</h3>
      <label htmlFor="home">
        <input
          id="phone-home"
          type="tel"
          name="home"
          value={formData.home}
          onChange={handlePhoneChange}
          placeholder="(000)-000-0000"
        />
      </label>
      <label htmlFor="birthday" className="birthday">
        <h3>Birthday</h3>
        <div className="datepicker-inputs">
          <input
            id="birthday"
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={onChange}
            placeholder="Birthday"
          />
        </div>
      </label>
      {/**************************  PREV ADDRESS PROPERTIES NOT REQ'D ********************* */}
      <h2>Previous Address</h2>
      <label htmlFor="streetAddress">
        <input
          type="text"
          name="streetAddress"
          value={formData.prevAddress.streetAddress}
          onChange={handlePrevAddressChange}
          placeholder="Street Address"
        />
      </label>
      <label htmlFor="apt">
        <input
          type="text"
          name="apt"
          value={formData.prevAddress.apt}
          onChange={handlePrevAddressChange}
          placeholder="Apt #"
        />
      </label>
      <label htmlFor="city">
        <input
          type="text"
          name="city"
          value={formData.prevAddress.city}
          onChange={handlePrevAddressChange}
          placeholder="City"
        />
      </label>
      <label htmlFor="statePrev" className="state">
        <select
          className="dropdown"
          id="statePrev"
          name="statePrev"
          value={formData.prevAddress.state}
          onChange={handleStateChangePrev} //<--- this needs to be incorporated into the 'handleCurrAddressChange' and 'handlePrevAddressChange' callbacks(?)
        >
          <option value="">State</option>
          {stateOptions}
        </select>
      </label>
      <label htmlFor="zip">
        <input
          type="text"
          name="zip"
          value={formData.prevAddress.zip}
          onChange={handlePrevAddressChange}
          placeholder="Zip"
        />
      </label>
      {/* ***************** */}
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Email"
        />
      </label>
      {/* --------------LAST SECTION OF FORMSECTION1 ------------ */}
      <h2 className="form-header SSN-header">Social Security Number</h2>
      <label htmlFor="ssn">
        <input
          type="text"
          name="ssn"
          value={formData.ssn}
          onChange={(e) => {
            const formattedValue = formatSSN(e.target.value);
            // Now you can set the formatted value to your form data
            setFormData((prevFormData) => ({
              ...prevFormData,
              ssn: formattedValue ? formattedValue : "",
            }));
          }}
          placeholder="SSN"
          maxLength="9"
        />
      </label>

      <h2 className="form-header leasedBefore-header">
        Have you leased with Holmes Motors before?
      </h2>
      <label htmlFor="leasedBefore">
        <select
          className="dropdown"
          value={formData.leasedBefore}
          name="leasedBefore"
          onChange={handleLeasedBeforeChange}
          placeholder="Have you leased with Holmes before?"
        >
          <option>No</option>
          <option>Yes</option>
        </select>
      </label>
      <h2 className="form-header liveInArea-header">
        How long have you lived in this area?
      </h2>
      <label htmlFor="liveInArea">
        <select
          className="dropdown"
          name="liveInArea"
          value={formData.liveInArea}
          onChange={handleLiveInArea}
        >
          <option>under 1 year</option>
          <option>over 1 year</option>
          <option>over 2 years</option>
          <option>I don't live in this area</option>
        </select>
      </label>
      <h2 className="form-header creditScoreEst-header">
        What is your estimated Credit Score?
      </h2>
      <p>(Disregard if not doing credit)</p>
      {/* <label>Slider Input:</label> */}
      <label htmlFor="creditScoreEst">
        <CollapsibleSlider
          className="slider"
          min={0}
          max={850}
          step={1}
          values={[formData.creditScoreEst]}
          name="creditScoreEst"
          //   values={formData.creditScoreEst} //number
          onChange={handleCreditScoreEst}
        />
      </label>
      <h2 className="form-header payAway-header">Pay-Away</h2>
      <label className="payAwayLabel" htmlFor="payAwayEnroll">
        <input
          type="checkbox"
          name="payAwayEnroll"
          checked={formData.payAwayEnroll}
          onChange={handlePayAwayEnrollChange}
        />
        I want to enroll into the Pay-A-Way Program
      </label>
    </div>
  );
};

// "a webpack script needs to be reconfigured in the WebPack configuration file."

// how to interact with the hidden configuration file:
// 1.

export const FormSection2 = ({ formData, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleStateChangeDL = (e) => {
    // Update the formData with the selected location
    onChange({
      target: {
        name: "driversLicenseState",
        value: e.target.value,
      },
    });
  };

  return (
    <div className="FormSection FormSection2">
      <h2>Drivers License Information</h2>
      <label htmlFor="driversLicenseNum" className="driversLicenseNum">
        <h3>Driver's License Number</h3>
        <input
          type="text"
          name="driversLicenseNum"
          value={formData.driversLicenseNum}
          //   checked={formData.location === "DIberville"}
          onChange={onChange}
          placeholder="Drivers License #"
        />
      </label>

      <label htmlFor="stateDL" className="state driversLicenseState">
        <h3>Driver's License State</h3>
        <select
          className="dropdown"
          name="stateDL"
          id="stateDL"
          value={formData.driversLicenseState}
          onChange={handleStateChangeDL}
        >
          <option value="">State</option>
          {stateOptions}
        </select>
      </label>

      <label className="driversLicenseExp" htmlFor="driversLicenseExp">
        <h3>Driver's License Expiration</h3>
        <input
          id="driversLicenseExp"
          type="date"
          name="driversLicenseExp"
          value={formData.driversLicenseExp}
          onChange={onChange}
          placeholder="Expiration Date"
        />
      </label>
    </div>
  );
};

// ////////////// FORM SECTION 3 ///////////////////

export const FormSection3 = ({ formData, onChange }) => {
  //   State Dropdown
  const handleStateChange = (e) => {
    onChange({
      target: {
        name: "state",
        value: e.target.value,
      },
    });
  };

  const handleStateChangeLL = (e) => {
    onChange({
      target: {
        name: "landlordLenderState",
        value: e.target.value,
      },
    });
  };

  const handleCurrentAddressChange = (e) => {
    const isCurrentAddress = e.target.value === "true";
    onChange({
      target: {
        name: "currentAddress",
        value: isCurrentAddress,
      },
    });
  };

  const handleResidenceStatusChange = (e) => {
    // Update the formData with the selected residence status
    onChange({
      target: {
        name: "residenceStatus",
        value: e.target.value,
      },
    });
  };

  const handleLiveWithStatusChange = (e) => {
    // Update the formData with the selected residence status
    onChange({
      target: {
        name: "liveWithStatus",
        value: e.target.value,
      },
    });
  };

  const handleMonthChange = (e, dateField) => {
    const selectedMonth = e.target.value;

    const targetDateField =
      dateField === "moveInDate" ? formData.moveInDate : formData.moveOutDate;

    // determine which dropdown (formData.moveInDate.month or formData.moveOutDate.month) was clicked to know which onChange to update

    onChange({
      target: {
        name: dateField,
        value: {
          ...targetDateField,
          month: selectedMonth,
        },
      },
    });
  };

  const handleMortLeaseMoPmtChange = (value) => {
    onChange({ target: { name: "mortgageLeaseMonthlyPmt", value } });
  };

  /////// Example that needs to be checked for duplicate, if there is, delete this one ////

  const handleYearChange = (e, dateField) => {
    // Update the formData with the selected residence status
    const selectedYear = e.target.value;

    const targetDateField =
      dateField === "moveInDate" ? formData.moveInDate : formData.moveOutDate;

    onChange({
      target: {
        name: dateField,
        value: {
          ...targetDateField,
          year: selectedYear,
        },
      },
    });
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);

    onChange({
      target: {
        name: name,
        value: formattedValue,
      },
    });
  };

  return (
    <div className="FormSection FormSection3">
      <h2>Residency Information</h2>
      <label htmlFor="streetAddress">
        <input
          type="text"
          name="streetAddress"
          value={formData.currAddress.streetAddress}
          onChange={onChange}
          placeholder="Street Address"
        />
      </label>
      <label htmlFor="apt">
        <input
          type="text"
          name="apt"
          value={formData.currAddress.apt}
          onChange={onChange}
          placeholder="Apt #"
        />
      </label>
      <label htmlFor="stateCurr" className="state currAddressState">
        <select
          className="dropdown"
          id="stateCurr"
          name="stateCurr"
          value={formData.currAddress.state}
          onChange={handleStateChange}
        >
          <option value="">State</option>
          {stateOptions}
        </select>
      </label>
      <label htmlFor="city">
        <input
          type="text"
          name="city"
          value={formData.currAddress.city}
          onChange={onChange}
          placeholder="City"
        />
      </label>
      <label htmlFor="zip">
        <input
          type="text"
          name="zip"
          value={formData.currAddress.zip}
          onChange={onChange}
          placeholder="Zip"
        />
      </label>

      {/* ASK JORDAN ABOUT THIS FIELD.. THIS WHOLE SECTION IS 'CURRENT ADDRESS' ALEADY?    */}
      <h3>Is this your current address?</h3>
      <label htmlFor="currentAddress" className="currentAddressLabel yes">
        <input
          type="radio"
          name="currentAddress"
          value={true}
          checked={formData.currentAddress === true}
          onChange={handleCurrentAddressChange}
        />
      </label>
      <label htmlFor="currentAddress" className="currentAddressLabel no">
        <input
          type="radio"
          name="currentAddress"
          value={false}
          checked={formData.currentAddress === false}
          onChange={handleCurrentAddressChange}
        />
      </label>

      <label htmlFor="residenceStatus" className="residenceStatus">
        <h3>Residence Status</h3>
        <select
          className="dropdown"
          name="residenceStatus"
          id="residenceStatus"
          value={formData.residenceStatus}
          onChange={handleResidenceStatusChange}
        >
          {residenceOptions}
        </select>
      </label>

      <label htmlFor="liveWith" className="liveWith">
        <h3>Who do you live with?</h3>
        <select
          name="liveWith"
          className="dropdown"
          id="liveWithStatus"
          value={formData.liveWithStatus}
          onChange={handleLiveWithStatusChange}
        >
          {liveWithOptions}
        </select>
      </label>

      {/* MOVE IN DATE */}

      <label className="moveInOutLabel" htmlFor="moveInDate">
        <h3>Move In Date</h3>
        <div className="moveInputs">
          <select
            name="moveInDate"
            className="dropdown"
            id="moveInDate"
            value={formData.moveInDate.month}
            onChange={(e) => handleMonthChange(e, "moveInDate")}
          >
            {justMonthsOptions.map((monthLabel) => (
              <option key={monthLabel} value={monthLabel}>
                {monthLabel}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="moveInDate"
            value={formData.moveInDate.year}
            onChange={(e) => handleYearChange(e, "moveInDate")}
            placeholder="Year"
          />
        </div>
      </label>

      {/* MOVE OUT DATE */}

      <label className="moveInOutLabel" htmlFor="moveOutDate">
        <h3>Move Out Date</h3>
        <div className="moveInputs">
          <select
            name="moveOutDate"
            className="dropdown"
            id="moveOutDate"
            value={formData.moveOutDate.month}
            onChange={(e) => handleMonthChange(e, "moveOutDate")}
          >
            {justMonthsOptions.map((monthLabel) => (
              <option key={monthLabel} value={monthLabel}>
                {monthLabel}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="moveOutDate"
            value={formData.moveOutDate.year}
            onChange={(e) => handleYearChange(e, "moveOutDate")}
            placeholder="Year"
          />
        </div>
      </label>
      <label className="mortgageLease" htmlFor="mortgageLeaseName">
        <h3>Name on Lease/Mortgage</h3>
        <input
          type="text"
          name="mortgageLeaseName"
          value={formData.mortgageLeaseName}
          onChange={onChange}
          // placeholder="Mortgage holder
        />
      </label>
      {/* <label className="mortgageLease" htmlFor="mortgageLeaseMonthlyPmt">
        <h3>Monthly Payment</h3>
        handleAvailDownPmtChange
        <input
          type="number"
          step="0.01"
          //   min="0"
          name="mortgageLeaseMonthlyPmt"
          value={formData.mortgageLeaseMonthlyPmt}
          onChange={onChange}
          placeholder="$0.00"
          // placeholder="Mortgage holder
        />
      </label> */}

      <label className="mortgageLease" htmlFor="mortgageLeaseMonthlyPmt">
        <h3>Monthly Payment</h3>
        <CurrencyInput
          name="mortgageLeaseMonthlyPmt" // Name for the input field
          placeholder="$0.00" // Placeholder text
          defaultValue={0} // Initial value
          value={formData.mortgageLeaseMonthlyPmt}
          onValueChange={handleMortLeaseMoPmtChange} // Callback when value changes
          decimalScale={2} // Number of decimal places
          prefix="$" // Currency symbol
        />
      </label>

      {/* LANDLORD/LENDER FIELDS */}

      <h2 className="form-header landlord-header">
        Landlord/Lender Information
      </h2>
      <label className="landlordLender" htmlFor="landlordLenderName">
        <h3>Name</h3>
        <input
          type="text"
          name="landlordLenderName"
          value={formData.landlordLenderName}
          onChange={onChange}
          // placeholder="Mortgage holder
        />
      </label>
      <label className="landlordLender" htmlFor="landlordLenderPhone">
        <h3>Phone</h3>
        <input
          type="tel"
          name="landlordLenderPhone"
          value={formData.landlordLenderPhone}
          onChange={handlePhoneChange}
          placeholder="(000)-000-0000"
        />
      </label>
      <label className="landlordLender" htmlFor="landlordLenderStreet">
        <h3>Street Address</h3>
        <input
          type="text"
          name="landlordLenderStreet"
          value={formData.landlordLenderStreet}
          onChange={onChange}
        />
      </label>
      <label className="landlordLender" htmlFor="landlordLenderCity">
        <h3>City</h3>
        <input
          type="text"
          name="landlordLenderCity"
          value={formData.landlordLenderCity}
          onChange={onChange}
        />
      </label>
      <label className="landlordLender state" htmlFor="landlordLenderState">
        <h3>State</h3>
        <select
          name="landlordLenderState"
          className="dropdown"
          id="landlordLenderState"
          value={formData.landlordLenderState}
          onChange={handleStateChangeLL}
        >
          <option value="">State</option>
          {stateOptions}
        </select>
      </label>
      <label className="landlordLender" htmlFor="landlordLenderZip">
        <h3>Zip</h3>
        <input
          type="text"
          name="landlordLenderZip"
          value={formData.landlordLenderZip}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

// EVERY LABEL WITH A 'htmlFor' ATTRIBUTE.. THEIR INPUTS NEED 'id'S WITH THE SAME NAME

export const FormSection4 = ({ formData, onChange }) => {
  const handleStateChangeEA = (e) => {
    onChange({
      target: {
        name: "employerState",
        value: e.target.value,
      },
    });
  };

  const handleCurrentEmployerChange = (e) => {
    const isCurrentEmployer = e.target.value === "true";
    onChange({
      target: {
        name: "currentEmployer",
        value: isCurrentEmployer,
      },
    });
  };

  const handleEmploymentType = (e) => {
    onChange({
      target: {
        name: "employmentType",
        value: e.target.value,
      },
    });
  };

  const handlePaySchedule = (e) => {
    onChange({
      target: {
        name: "paySchedule",
        value: e.target.value,
      },
    });
  };

  const handleMonthChange = (e, dateField) => {
    const selectedMonth = e.target.value;

    const targetDateField =
      dateField === "employerStartDate"
        ? formData.employerStartDate
        : formData.employerEndDate;

    // determine which dropdown (formData.moveInDate.month or formData.moveOutDate.month) was clicked to know which onChange to update

    onChange({
      target: {
        name: dateField,
        value: {
          ...targetDateField,
          month: selectedMonth,
        },
      },
    });
  };

  const handleYearChange = (e, dateField) => {
    // Update the formData with the selected residence status
    const selectedYear = e.target.value;

    const targetDateField =
      dateField === "employerStartDate"
        ? formData.employerStartDate
        : formData.employerEndDate;

    onChange({
      target: {
        name: dateField,
        value: {
          ...targetDateField,
          year: selectedYear,
        },
      },
    });
  };

  const handleCheckAmtChange = (value) => {
    onChange({ target: { name: "employerCheckAmt", value } });
  };

  const handleHourlyRateChange = (value) => {
    onChange({ target: { name: "employerHourlyRate", value } });
  };

  const handleHoursPerWeekChange = (value) => {
    onChange({ target: { name: "employerHoursPerWeek", value } });
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);

    onChange({
      target: {
        name: name,
        value: formattedValue,
      },
    });
  };

  return (
    <div className="FormSection FormSection4">
      <h2>Employment Information</h2>
      <label className="employerName" htmlFor="employerName">
        <h3>Name of Employer</h3>
        <input
          id="employerName"
          type="text"
          name="employerName"
          value={formData.employerName}
          onChange={onChange}
          // placeholder="Mortgage holder
        />
      </label>
      <label className="supervisorName" htmlFor="supervisorName">
        <h3>Name of Supervisor</h3>
        <input
          id="supervisorName"
          type="text"
          name="supervisorName"
          value={formData.supervisorName}
          onChange={onChange}
          // placeholder="Mortgage holder
        />
      </label>
      <label className="employerPhone" htmlFor="employerPhone">
        <h3>Employer Phone</h3>
        <input
          id="employerPhone"
          type="tel"
          name="employerPhone"
          value={formData.employerPhone}
          onChange={handlePhoneChange}
          placeholder="(000)-000-0000"
        />
      </label>

      <h2>Employer Address</h2>
      <label className="employerStreet" htmlFor="employerStreet">
        <input
          id="employerStreet"
          type="text"
          name="employerStreet"
          value={formData.employerStreet}
          onChange={onChange}
          placeholder="Street Address"
        />
      </label>
      <label className="employerCity" htmlFor="employerCity">
        <input
          id="employerCity"
          type="text"
          name="employerCity"
          value={formData.employerCity}
          onChange={onChange}
          placeholder="City"
        />
      </label>
      <label className="employerState state" htmlFor="employerState">
        <select
          name="employerState"
          className="dropdown"
          id="employerState"
          value={formData.employerState}
          onChange={handleStateChangeEA}
        >
          <option value="">State</option>
          {stateOptions}
        </select>
      </label>
      <label className="employerZip" htmlFor="employerZip">
        <input
          id="employerZip"
          type="text"
          name="employerZip"
          value={formData.employerZip}
          onChange={onChange}
          placeholder="Zip"
        />
      </label>
      <h2>Is this your current employer?</h2>
      <label htmlFor="currentEmployer" className="currentEmployerLabel yes">
        <input
          type="radio"
          name="currentEmployer"
          value={true}
          checked={formData.currentEmployer === true}
          onChange={handleCurrentEmployerChange}
        />
      </label>
      <label htmlFor="currentEmployer" className="currentEmployerLabel no">
        <input
          type="radio"
          name="currentEmployer"
          value={false}
          checked={formData.currentEmployer === false}
          onChange={handleCurrentEmployerChange}
        />
      </label>

      {/* employment type, pay schedule etc here*/}

      <div className="currEmployerFields">
        <label className="employmentType" htmlFor="employmentType">
          <h3>Employment Type</h3>
          <div className="moveInputs">
            <select
              className="dropdown"
              name="employmentType"
              id="employmentType"
              value={formData.employmentType}
              onChange={handleEmploymentType}
            >
              {employmentTypeOptions}
            </select>
          </div>
        </label>

        {/* ******************************* */}

        <label className="employerHourlyRate" htmlFor="employerHourlyRate">
          <h3>Hourly Rate</h3>
          <div className="moveInputs hourly">
            <CurrencyInput
              name="employerHourlyRate" // Name for the input field
              placeholder="$0.00" // Placeholder text
              defaultValue={0} // Initial value
              value={formData.employerHourlyRate}
              onValueChange={handleHourlyRateChange} // Callback when value changes
              decimalScale={2} // Number of decimal places
              prefix="$" // Currency symbol
            />
            <h2>/hr</h2>
          </div>
        </label>
        <label className="employerHoursPerWeek" htmlFor="employerHoursPerWeek">
          <h3>Hours Per Week (est)</h3>
          <div className="moveInputs">
            <CurrencyInput
              name="employerHoursPerWeek" // Name for the input field
              placeholder="$0.00" // Placeholder text
              defaultValue={0} // Initial value
              value={formData.employerHoursPerWeek}
              onValueChange={handleHoursPerWeekChange} // Callback when value changes
              decimalScale={2} // Number of decimal places
              prefix="$" // Currency symbol
            />
            <h2>/per week</h2>
          </div>
        </label>

        {/* ******************************* */}
        <label className="paySchedule" htmlFor="paySchedule">
          <h3>Pay Schedule</h3>
          <div className="moveInputs">
            <select
              name="paySchedule"
              className="dropdown"
              id="paySchedule"
              value={formData.paySchedule}
              onChange={handlePaySchedule}
            >
              {payScheduleOptions}
            </select>
          </div>
        </label>
        {/* START,END DATE FOR EMPLOYMENT */}
        <label className="employerStartDate" htmlFor="employerStartDate">
          <h3>Start Date</h3>
          <div className="moveInputs">
            <select
              name="employerStartDate"
              className="dropdown"
              id="employerStartDate"
              value={formData.employerStartDate.month}
              onChange={(e) => handleMonthChange(e, "employerStartDate")}
            >
              {justMonthsOptions.map((monthLabel) => (
                <option key={monthLabel} value={monthLabel}>
                  {monthLabel}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="employerStartDate"
              value={formData.employerStartDate.year}
              onChange={(e) => handleYearChange(e, "employerStartDate")}
              placeholder="Year"
            />
          </div>
        </label>
        <label className="employerEndDate" htmlFor="employerEndDate">
          <h3>End Date</h3>
          <div className="moveInputs">
            <select
              name="employerEndDate"
              className="dropdown"
              id="employerEndDate"
              value={formData.employerEndDate.month}
              onChange={(e) => handleMonthChange(e, "employerEndDate")}
            >
              {justMonthsOptions.map((monthLabel) => (
                <option key={monthLabel} value={monthLabel}>
                  {monthLabel}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="employerEndDate"
              value={formData.employerEndDate.year}
              onChange={(e) => handleYearChange(e, "employerEndDate")}
              placeholder="Year"
            />
          </div>
        </label>
        <label className="employerCheckAmt" htmlFor="employerCheckAmt">
          <h3>Check Amount</h3>

          <CurrencyInput
            name="employerCheckAmt" // Name for the input field
            placeholder="$0.00" // Placeholder text
            defaultValue={0} // Initial value
            value={formData.employerCheckAmt}
            onValueChange={handleCheckAmtChange} // Callback when value changes
            decimalScale={2} // Number of decimal places
            prefix="$" // Currency symbol
          />
        </label>

        <label className="employerNextPayDate" htmlFor="employerNextPayDate">
          <h3>Next Pay Date</h3>
          <input
            id="employerNextPayDate"
            type="date"
            name="employerNextPayDate"
            value={formData.employerNextPayDate}
            onChange={onChange}
            placeholder="Next Pay Date"
          />
        </label>
      </div>
    </div>
  );
};

export const FormSection5 = ({ formData, setFormData, onChange }) => {
  const handleStateChangeRef = (e) => {
    // Update the formData with the selected location
    onChange({
      target: {
        name: "refAddress",
        value: {
          ...formData.refAddress,
          state: e.target.value,
        },
      },
    });
  };

  const handleRefAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      refAddress: {
        ...prevFormData.refAddress,
        [name]: value,
      },
    }));
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);

    onChange({
      target: {
        name: name,
        value: formattedValue,
      },
    });
  };

  return (
    <div className="FormSection FormSection5">
      <h2>References</h2>
      <label className="refFirstName" htmlFor="refFirstName">
        <h3>First Name</h3>
        <input
          type="text"
          name="refFirstName"
          value={formData.refFirstName}
          onChange={onChange}
          placeholder="First Name"
        />
      </label>
      <label className="refMiddleName" htmlFor="refMiddleName">
        <h3>Middle Name</h3>
        <input
          type="text"
          name="refMiddleName"
          value={formData.refMiddleName}
          onChange={onChange}
          placeholder="Middle Name"
        />
      </label>
      <label className="refLastName" htmlFor="refLastName">
        <h3>Last Name</h3>
        <input
          type="text"
          name="refLastName"
          value={formData.refLastName}
          onChange={onChange}
          placeholder="Last Name"
        />
      </label>
      <label htmlFor="refRelationship">
        <h3>Relationship</h3>
        <select
          name="refRelationship"
          className="dropdown"
          id="refRelationship"
          value={formData.refRelationship}
          onChange={onChange}
        >
          <option value="">Relationship</option>
          {relationshipOptions}
        </select>
      </label>
      <h3>Address</h3>
      <label htmlFor="streetAddress">
        <input
          type="text"
          name="streetAddress"
          value={formData.refAddress.streetAddress}
          onChange={handleRefAddressChange}
          placeholder="Street Address"
        />
      </label>
      <label htmlFor="apt">
        <input
          type="text"
          name="apt"
          value={formData.refAddress.apt}
          onChange={handleRefAddressChange}
          placeholder="Apt #"
        />
      </label>
      <label htmlFor="state" className="state">
        <select
          className="dropdown"
          id="stateCurr"
          name="state"
          value={formData.refAddress.state}
          onChange={handleStateChangeRef}
        >
          <option value="">State</option>
          {stateOptions}
        </select>
      </label>
      <label htmlFor="city">
        <input
          type="text"
          name="city"
          value={formData.refAddress.city}
          onChange={handleRefAddressChange}
          placeholder="City"
        />
      </label>
      <label htmlFor="zip">
        <input
          type="text"
          name="zip"
          value={formData.refAddress.zip}
          onChange={handleRefAddressChange}
          placeholder="Zip"
        />
      </label>
      <label className="refMobile" htmlFor="refMobile">
        <h3>Mobile Phone</h3>
        <input
          type="tel"
          name="refMobile"
          value={formData.refMobile}
          onChange={handlePhoneChange}
          placeholder="(000)-000-0000"
        />
      </label>
      <label className="refHome" htmlFor="refHome">
        <h3>Home Phone</h3>
        <input
          type="tel"
          name="refHome"
          value={formData.refHome}
          onChange={handlePhoneChange}
          placeholder="(000)-000-0000"
        />
      </label>
      <label className="refWork" htmlFor="refWork">
        <h3>Work Phone</h3>
        <input
          type="tel"
          name="refWork"
          value={formData.refWork}
          onChange={handlePhoneChange}
          placeholder="(000)-000-0000"
        />
      </label>
    </div>
  );
};
export const FormSection6 = ({ formData, setFormData, onChange }) => {
  const handlePrimeIncomeChange = (value) => {
    onChange({ target: { name: "primeMoIncomePreTax", value } });
  };

  const handleOtherIncomeChange = (value) => {
    onChange({ target: { name: "otherMoIncome", value } });
  };

  const handleDownPmtChange = (value) => {
    onChange({ target: { name: "availDownPmt", value } });
  };

  const handleRepoJudgeLienChange = (e) => {
    const hasRepoJudgeLien = e.target.value === "true";
    onChange({
      target: {
        name: "repoJudgeLien",
        value: hasRepoJudgeLien,
      },
    });
  };

  return (
    <div className="FormSection FormSection6">
      <h2>Financial Information</h2>
      <div className="finance-header">
        <h3 style={{ fontSize: "2em", textAlign: "center" }}>Income</h3>
        <p>Example of income would be as follows:</p>
        <ul className="incomeExList">
          <li className="incomeExListItem">
            40 hours per week | <b>$20</b> per hour
          </li>
          <li className="incomeExListItem">
            40 hours * <b>$20</b> = <b>$800</b> per week
          </li>
          <li className="incomeExListItem">
            <b>$800</b> per week * 52 week = <b>$41,600</b> per year
          </li>
          <li className="incomeExListItem">
            <b>$41,600</b> per year/12 months = <b>$3466.66</b> per week
          </li>
          <li className="incomeExListItem">
            This would make <b>$3466.66</b> your monthly income before taxes.
          </li>
        </ul>
      </div>

      <label className="primeMoIncomePreTax" htmlFor="primeMoIncomePreTax">
        <h3>Primary Monthly Income Pre-Tax</h3>

        <CurrencyInput
          name="primeMoIncomePreTax" // Name for the input field
          placeholder="$0.00" // Placeholder text
          defaultValue={0} // Initial value
          value={formData.primeMoIncomePreTax}
          onValueChange={handlePrimeIncomeChange} // Callback when value changes
          decimalScale={2} // Number of decimal places
          prefix="$" // Currency symbol
        />
      </label>

      <label className="otherMoIncome" htmlFor="otherMoIncome">
        <h3>Other Monthly Income</h3>

        <CurrencyInput
          name="otherMoIncome" // Name for the input field
          placeholder="$0.00" // Placeholder text
          defaultValue={0} // Initial value
          value={formData.otherMoIncome}
          onValueChange={handleOtherIncomeChange} // Callback when value changes
          decimalScale={2} // Number of decimal places
          prefix="$" // Currency symbol
        />
      </label>

      <label htmlFor="maritalStatus">
        <h3>Marital Status</h3>
        <select
          name="maritalStatus"
          className="dropdown"
          id="maritalStatus"
          value={formData.maritalStatus}
          onChange={onChange}
        >
          <option value="">Marital Status</option>
          {maritalOptions}
        </select>
      </label>

      <label className="numDependents" htmlFor="numDependents">
        <h3>Number of Dependents</h3>
        <input
          type="number"
          name="numDependents"
          value={formData.numDependents}
          onChange={onChange}
          placeholder="Number of Dependents"
        />
      </label>

      <label htmlFor="bankruptcyFiled">
        <h3>Ever filed Bankruptcy?</h3>
        <select
          name="bankruptcyFiled"
          className="dropdown"
          id="bankruptcyFiled"
          value={formData.bankruptcyFiled}
          onChange={onChange}
        >
          <option value="">Options</option>
          {bankruptcyOptions}
        </select>
      </label>
      <label htmlFor="bankruptcyFileDate" className="bankruptcyFileDate">
        <h3>File Date (if app'l)</h3>
        <div className="datepicker-inputs">
          <input
            id="bankruptcyFileDate"
            type="date"
            name="bankruptcyFileDate"
            value={formData.bankruptcyFileDate}
            onChange={onChange}
            placeholder="File Date"
          />
        </div>
      </label>
      <label className="bankruptcyYearsSince" htmlFor="bankruptcyYearsSince">
        <h3>Years Since Bankruptcy</h3>
        <input
          type="number"
          name="bankruptcyYearsSince"
          value={formData.bankruptcyYearsSince}
          onChange={onChange}
          placeholder="Years Since Filing"
        />
      </label>
      <label className="bankruptcyMonthsSince" htmlFor="bankruptcyMonthsSince">
        <h3>Months Since Bankruptcy</h3>
        <input
          type="number"
          name="bankruptcyMonthsSince"
          value={formData.bankruptcyMonthsSince}
          onChange={onChange}
          placeholder="Months Since Filing"
        />
      </label>

      <h3>Any Repossesions, Judgements, or Liens?</h3>
      <label htmlFor="repoJudgeLien" className="currentEmployerLabel yes">
        <input
          type="radio"
          name="repoJudgeLien"
          value={true}
          checked={formData.repoJudgeLien === true}
          onChange={handleRepoJudgeLienChange}
        />
      </label>
      <label htmlFor="repoJudgeLien" className="currentEmployerLabel no">
        <input
          type="radio"
          name="repoJudgeLien"
          value={false}
          checked={formData.repoJudgeLien === false}
          onChange={handleRepoJudgeLienChange}
        />
      </label>
      <label htmlFor="repoFilingDate" className="repoFilingDate">
        <h3>Repo Filing Date (if app'l)</h3>
        <div className="datepicker-inputs">
          <input
            id="repoFilingDate"
            type="date"
            name="repoFilingDate"
            value={formData.repoFilingDate}
            onChange={onChange}
            placeholder="File Date"
          />
        </div>
      </label>
      <label className="availDownPmt" htmlFor="availDownPmt">
        <h2>Down Payment</h2>
        <CurrencyInput
          name="availDownPmt" // Name for the input field
          placeholder="$0.00" // Placeholder text
          defaultValue={0} // Initial value
          value={formData.availDownPmt}
          onValueChange={handleDownPmtChange} // Callback when value changes
          decimalScale={2} // Number of decimal places
          prefix="$" // Currency symbol
        />
      </label>
    </div>
  );
};

export const FormSection7 = ({ formData }) => {
  return (
    <div className="FormSection FormSection7">
      <h2>Review Your Application</h2>
      <div className="formResponses">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <p>
              {key}: {JSON.stringify(formData[key])}
            </p>
            {/* <p>Field Value: </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

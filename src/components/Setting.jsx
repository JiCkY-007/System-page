import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Setting = () => {
  const handleRequestedClick = () => {
    console.log("Requested By is Clicked");
  };
  const handleRequestedDateClick = () => {
    console.log("Request Date is Clicked");
  };
  const handleStatusClick = () => {
    console.log("Status is Clicked");
  };

  const [date, setDate] = useState(new Date());
  const [isDateSelected, setIsDateSelected] = useState(false);
  const handleDateChange = (date) => {
    setDate(date);
    setIsDateSelected(true);
  };
  const handleClearDate = () => {
    setDate(null);
    setIsDateSelected(false);
  };
  return (
    <div className="bg-white  h-full mx-0 p-0 rounded-lg max-md: ">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <div className="bg-white w-full mx-0 p-0  rounded-none ">
        <h2 className="text-2xl font-semibold mb-4 w-full text-left pl-4">
          Organization Settings
        </h2>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <div className="flex flex-row max-md:flex-col max-md:items-center ">
        <div id="left" className="flex justify-center w-1/4 max-md:w-full">
          <ul className="mt-8 space-y-4  pl-10">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-800 hover:underline"
              >
                <i className="fas fa-share-square text-gray-400"></i>
                <span>Shared event types</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-800 hover:underline"
              >
                <i className="fas fa-user-lock text-gray-400"></i>
                <span>Single sign-on</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-800 hover:underline"
              >
                <i className="fas fa-cogs text-gray-400"></i>
                <span>Workflows</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-800 hover:underline"
              >
                <i className="fas fa-trash-alt text-gray-400"></i>
                <span>Data deletion</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="right" className="flex-1 w-full text-left" class="w-3/4">
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-0 bg-white">
              <i className="fas fa-trash-alt text-gray-400"></i>
              <h3 className="text-lg font-semibold bg-white ">
                Delete information from your organization
              </h3>
            </div>
            <p className="text-gray-600 text-left pt-3 pr-3 pb-3 pl-0 ">
              When anyone in your organization schedules an event with an
              invitee, information about the event and everyone part of it is
              saved in Calendly. If you need to delete this information from
              Calendly and its vendors for compliance reasons, you can do so
              without contacting support. Once you delete information, you won't
              be able to recover it. Invitee data will be deleted 7 days from
              the date you make the request.
            </p>
            <div className="flex items-center space-x-0 bg-red-100 rounded p-3">
              <i className="fas fa-trash-alt text-gray-400"></i>
              <h3 className="text-lg font-semibold">
                Once you delete information, you wont be able to recover it
              </h3>
            </div>
            <p className="text-gray-600 text-left pt-3 pr-3 pb-3 pl-0">
              Invitee data will be deleted 7 days from the date you make the
              request
            </p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>

            {/* yaha pe ek section khtam  */}

            <div className="flex items-center space-x-0 bg-white pt-2.5 pb-2">
              <i className="fas fa-user-minus text-gray-400"></i>
              <h3 className="text-base font-semibold pt-4 ">
                Delete information for specific invitees
              </h3>
            </div>
            <div className="flex flex-col">
              <label
                for="message"
                className="text-gray-600 text-left pt-3 pr-3 pb-4 pl-0"
              >
                Enter an invitee's email to delete all of their personally
                identifiable information from your organization and
                integrations. During the data deletion process, Calendly removes
                the deleted invitee from their spot on group events and cancels
                both pending and upcoming events with them.
              </label>

              <div>
                <textarea
                  id="message"
                  rows="4"
                  className=" border-black block p-2.5 w-full  text-sm text-white bg-white rounded-md border border-gray-300 dark:bg-white dark:border-gray-600 dark:text-white rounded-md"
                  placeholder=""
                ></textarea>
              </div>
              <div className="flex  pt-4 pr-4 pb-4 pl-0 max-md:w-full max-md:justify-center ">
                <button className="flex items-center justify-center  h-10 border w-24 border-gray-300 rounded-full bg-red-500 text-white font-normal bg-red-500 rounded-full hover:bg-red-700  px-6 pb-2 pt-2.5  text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 shadow-primary-2 outline-none ring-0 bg-primary-600 shadow-primary-2 motion-reduce:transition-none shadow-black/30 hover-shadow-dark-strong ">
                  Delete
                </button>
              </div>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>

            {/* yaha hua dusara section over */}

            <div className="flex items-center space-x-0 bg-white pt-2.5 pb-2">
              <i className="fas fa-user-minus text-gray-400"></i>
              <h3 className="text-base font-semibold">
                Delete information within a period of time
              </h3>
            </div>
            <p className="text-gray-600 text-left pt-3 pr-3 pb-3 pl-0">
              Choose a date range to delete all information from scheduled
              events within that period of time.
            </p>
            <div>
              <div className="p-2">
                <div className="flex w-full max-md:flex-col items-center justify-center gap-2">
                  <DatePicker
                    selected={date}
                    onChange={handleDateChange}
                    className="w-80 border  border-gray-300 rounded-md px-3 py-2 mr-3 outline-none"
                    placeholderText="Select a date"
                  />
                  <button
                    onClick={handleClearDate}
                    className={`flex items-center justify-center w-12 h-10 border w-24 border-gray-300 rounded-full bg-red-500 text-white font-normal ${
                      !isDateSelected && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isDateSelected}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 "></hr>

            {/* last section */}
          </div>

          <div>
            <p className="text-black font-medium text-left pt-5 pr-3 pb-2 pl-0">
              Data deletion history
            </p>
          </div>
          <section className="w-full flex items-center justify-center">
            <div className="border rounded-md w-full mt-1 shadow-md grid grid-cols-3 place-items-center max-md:grid-cols-1 ">
              <div className="flex font-semibold items-center p-2 gap-2">
                Request Date{" "}
                <span
                  className="cursor-pointer"
                  onClick={handleRequestedDateClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex items-center font-semibold p-2 gap-2">
                Requested by{" "}
                <span className="cursor-pointer" onClick={handleRequestedClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex items-center p-2 font-semibold gap-2">
                Status{" "}
                <span className="cursor-pointer" onClick={handleStatusClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </section>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>

          <div>
            <p className="text-black font-semibold text-left pt-5 pr-3 pb-2 pl-0">
              Delete your account
            </p>

            <p className="text-black font-normal text-left pt-0 pr-3 pb-2 pl-0">
              You can delete your account in{" "}
              <a href="/account-settings" style={{ color: "blue" }}>
                account settings
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

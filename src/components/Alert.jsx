import React from 'react'

const Alert = ({ type, text }) => {
    return (
      <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
        <div
          className={`p-2 ${
            type === "danger" ? "bg-red-100" : "bg-green-100"
          } rounded-lg items-center text-white leading-none lg:rounded-full flex lg:inline-flex`}
          role='alert'
        >
          <p
            className={`flex rounded-full ${
              type === "danger" ? "bg-red-300" : "bg-green-300"
            } uppercase px-2 py-1 text-xs font-semibold mr-3`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>
          <p
            className={`mr-2 text-left ${
              type === "danger" ? "text-red-800" : "text-green-800"
            } `}
          >
            {text}
          </p>
        </div>
      </div>
    );
  };

export default Alert
import React from 'react'

const FeatureUtils = ({ title, paragraph, icon: Icon }) => {
  return (
    <div className="flex items-start gap-4 px-4 transition-all duration-200">
      <span className="bg-[#d4a6b6] text-white hover:bg-black hover:text-white p-2 rounded-full text-xl">{Icon}</span>

      <div>
        <h3 className="font-[poppins] text-[22px] text-[#292828] mb-1">
          {title}
        </h3>
        <p className="text-sm font-[inter] text-[#5d5b5b] max-w-[240px] leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  )
}

export default FeatureUtils

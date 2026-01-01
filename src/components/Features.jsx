import React from 'react'

import { FaArrowLeft, FaDolly, FaShippingFast } from 'react-icons/fa'
import FeatureUtils from '../utils/FeaturesUtils'

const Features = () => {
  
  return (
    <section className="px-6 pt-14 sm:px-10 lg:px-16 pb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">
      
      <div className="font-[alice] text-[#5d5b5b] w-full lg:w-[150px] text-center lg:text-left">
        <p className="uppercase border-b border-[#d4a6b6] pb-3">
          Why Choose Us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <FeatureUtils
          icon={<FaShippingFast />}
          title="Fast Delivery"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        />

        <FeatureUtils
          icon={<FaDolly />}
          title="Free Shipping"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        />

        <FeatureUtils
          icon={<FaArrowLeft />}
          title="Easy Returns"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        />
      </div>
    </section>
  )
}

export default Features

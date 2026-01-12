import React from 'react'

const Veneer = () => {
  return (
    <div className='font-jost text-black bg-white'>
          {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2024/10/Untitled-design-3-150x150.png")` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative h-full max-w-6xl px-4 flex items-end">
                    <div className="pb-8 mt-6 w-full">
                        <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
                        <h1 className="text-white text-3xl md:text-5xl ml-40 ">
                            Dental Implant Treatment Lahore

                        </h1>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default Veneer

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">
              Doctor
            </a>
            <ul className="flex space-x-7">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* About Section */}
      <div className="flex  justify-start mt-10 w-full h-auto">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-100 h-100 bg-green-600 border-4 border-green-600 rounded-lg ">
          <div className="ml-5">
            <div className="flex">
              <p className="text-4xl mt-10 text-white">Save Humanity</p>
              <img
                src="/care.png"
                alt="doctor"
                className="w-15 h-20 ml-10 mr-2 border-20 bg-pink-100 rounded-lg"
              />
            </div>
            <h1 className="font-Arial text-8xl text-white mr-10">
              Better Help
            </h1>
            <p className="text-4xl text-white">Through Technology</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex justify-center items-center ml-10">
          <div className="max-w-max h-auto flex flex-col items-center p-4">
            <img
              src="pexels-shvetsa-4225881.jpg"
              alt="yoga"
              className="w-50 h-64 mb-20 mr-3 border-4 border-green-600 rounded-lg"
            />
            <img
              src="/pexels-mariya-b-555701080-30146897.jpg"
              alt="online"
              className="w-50 h-64 -ml-1 border-4 border-green-600 rounded-lg"
            />
          </div>
          <div className="max-w-max h-auto flex flex-col items-center justify-center m-5">
            <img
              src="/doctor.png"
              alt="doctor"
              className="w-30 h-40 mb-10 ml-3 border-green-600 rounded-lg"
            />
            <img
              src="/pexels-mirdental-network-34165767-7074380.jpg"
              alt="doctor"
              className="w-50 h-64 border-4 border-green-600 mr-5 rounded-lg"
            />
            <img
              src="/stethoscope.png"
              alt="doctor"
              className="w-30 h-40 mt-10 mr-2 border-green-600 rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <div className="max-w-max h-auto flex flex-col items-center p-4">
            <img
              src="/pexels-mirdental-network-34165767-7074380.jpg"
              alt="yoga"
              className="w-50 h-64 mb-20 mr-3 border-4 border-green-600 rounded-lg"
            />
            <img
              src="/pexels-rihan-ishan-das-739500-2519332.jpg"
              alt="online"
              className="w-50 h-64 -ml-1 border-4 border-green-600 rounded-lg"
            />
          </div>
          <div className="max-w-max h-auto flex flex-col items-center justify-center m-5">
            <img
              src="/hospital.png"
              alt="doctor"
              className="w-30 h-40 mb-10 ml-3 border-green-600 rounded-lg"
            />
            <img
              src="/pexels-karolina-grabowska-7195112.jpg"
              alt="doctor"
              className="w-50 h-64 border-4 border-green-600 mr-5 rounded-lg"
            />
            <img
              src="/heart.png"
              alt="doctor"
              className="w-30 h-40 mt-10 mr-2 border-green-600 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div
        id="about"
        className="flex flex-col justify-center items-center mt-10 w-full h-auto bg-green-100 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">About</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          At DocOnCall, we make healthcare accessible by connecting patients
          with certified doctors through secure video consultations. Whether you
          need expert advice or quick assistance, you can now get professional
          medical care from the comfort of your home.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-2xl mt-4">
          What makes us unique is our integration of cutting-edge AI technology.
          Our AI tools assist in detecting health conditions by analyzing your
          symptoms and medical history. These insights help doctors provide
          accurate diagnoses and personalized treatment plans.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-2xl mt-4">
          Our mission is to break barriers to healthcare, enhance the quality of
          care through innovation, and prioritize the well-being of every
          patient. With DocOnCall, you get reliable and compassionate
          healthcare, anytime and anywhere.
        </p>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto mt-10 p-5">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="F:/programs/code/hackathon/images/laptop.png"
              alt="Video Call"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Video Call with Doctors
            </h3>
            <p className="text-gray-700 text-center">
              Connect with certified doctors through secure video consultations
              from the comfort of your home.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="F:/programs/code/hackathon/images/mind-health.png"
              alt="AI Assistance"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              AI Medical Assistance
            </h3>
            <p className="text-gray-700 text-center">
              Our AI tools assist in detecting health conditions by analyzing
              your symptoms and medical history.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="F:/programs/code/hackathon/images/donation.png"
              alt="Donation Fund"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Donation Fund
            </h3>
            <p className="text-gray-700 text-center">
              Support those who can't afford healthcare by contributing to our
              donation fund.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto mt-10 p-5">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-5 text-blue-600">
            Contact Us
          </h2>
          <p className="mb-10 text-gray-700">
            Get in touch with us for more information.
          </p>
        </div>
      </div>
    </div>
  );
}

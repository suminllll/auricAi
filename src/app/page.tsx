import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-center h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 -mt-16">
        {/* Background Decorative Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        {/* Background Image */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 flex items-end justify-center">
          <Image
            src="/bgimage.png"
            alt="Background"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain opacity-40"
            priority
          />
        </div>

        {/* hero 문구 */}
        <div className="relative z-10 container mx-auto px-4 ">
          <div className="relative h-[200px] mb-8 flex items-center justify-center">
            <h1 className="absolute text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight animate-slide-up-1">
              Data Refined,<br/>
              <span className="text-blue-600">Results Redefined.</span>
            </h1>
            <h1 className="absolute text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight animate-slide-up-2">
              Data, Process, Decision<br/>
              <span className="text-blue-600">Simplified.</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium pt-5">
            리스크를 최소화하고, 비즈니스의 가능성을 확장하는 예측 AI<br/>
            기업 비즈니스에 특화된 예측 AI로 수익성을 극대화하세요.
          </p>


        </div>

        {/* Hero Icon with Animation */}
        <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <Image
            src="/heroIcon.png"
            alt="Icon"
            className="animate-bounce-slow"
            width={500}
            height={500}
          />
        </div>
      </section>

        {/* Features Section */}
        <section className="flex items-center justify-center py-20 h-[90vh]">
          <div className='w-pc'>
            <h2 className="text-3xl font-bold text-center mb-12">AURIC AI는 세 가지 솔루션으로 기업의 효율을 설계합니다.</h2>

            <div className="relative">
              {/* SVG for curved connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '50%', height: '4px' }}>
                {/* Left to Center curve */}
                <path
                  d="M 200 0 Q 350 -50, 500 0"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Center to Right curve */}
                <path
                  d="M 500 0 Q 650 50, 800 0"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="p-6 bg-white border-2 border-blue-300 rounded-lg hover:shadow-lg transition-shadow h-[230px] w-[361px]">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Process</h3>
                  <p className="text-gray-600">
                    업무를 자동화하고, 시간을 자산으로 바꿉니다.<br/>
                    반복되는 작업과 프로세스를 AI로 자동화 합니다.
                    불필요한 단계는 줄이고, 효율은 높입니다.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-blue-300 rounded-lg hover:shadow-lg transition-shadow h-[230px] w-[361px]">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Insight</h3>
                  <p className="text-gray-600">
                    데이터를 분석하고, 방향을 제시합니다.<br/>
                    데이터 속에서 흐름을 읽고,
                    의사결정에 필요한 인사이트를 제공합니다.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-blue-300 rounded-lg hover:shadow-lg transition-shadow h-[230px] w-[361px]">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Platform</h3>
                  <p className="text-gray-600">
                    AI를 브랜드의 구조 속에 녹입니다.<br/>
                    각 기업의 운영 환경에 맞춘 맞춤형 AI 시스템을 구축합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center h-[90vh]">
          <div className="w-pc grid grid-cols-2 gap-10 font-bold">
<div className="text-[44px] font-bold leading-[1.3] ">
<p className='text-[#888888]'>AURIC AI는 </p>
인공지능을 통해<br/> 비즈니스의 복잡한 문제를 <br/>단순하게 만드는<br/> AI 솔루션 기업입니다.
</div>
<div className='flex flex-col mt-[-50px]'>
<div className='flex flex-col'>
  <p className='text-[88px] '>Accuracy</p>
  <p className='text-[22px]'>최대 98.6% AI 예측 정확도</p>
</div>
<div className='flex flex-col'>
  <p className='text-[88px]'>Scalability</p>
  <p className='text-[22px]'>다양한 산업에 적용 가능한 224개의 예측 모델 보유</p>
</div>
<div className='flex flex-col'>
  <p className='text-[88px]'>Expertise</p>
  <p className='text-[22px]'>교수/박사로 구성된 AI 전문 경영진</p>
</div>
</div>
          </div>
        </section>

        <section className="flex items-center justify-center h-[100vh]">
          <div className="w-pc font-bold">
            <div className="text-[44px] text-center">
<h1 className='text-[#888888]'>AURIC AI의 예측 기술력은</h1>
<p > 글로벌 시장에서 이미 검증되었습니다.</p>
</div>
<div className='flex mt-35'>
<div className='flex flex-col items-center gap-5'>
  <div className='rounded-full bg-[#D0DAFA] text-[#111948] w-[333px] h-[333px]'>58.1%</div>
  <p>글로벌 M사</p>
</div>
<div className='flex flex-col items-center gap-5'>
  <div className='rounded-full bg-[#2866EE] text-[#111948] w-[333px] h-[333px]'>90.1%</div>
  <p>AURIC AI</p>
</div>
<div className='flex flex-col items-center gap-5'>
  <div className='rounded-full bg-[#D0DAFA] text-[#111948] w-[333px] h-[333px]'>71.5%</div>
  <p>글로벌 A사</p>
</div></div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
         AURIC AI에 문의하세요
          </h2>
       
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
         문의 접수하기
          </button>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import DownloadButton from '@/components/DownloadButton';

const Solution = () => {
  return (
    <div>
      <section className="h-[75vh] mt-[-80px] bg-linear-to-r from-blue-300 via-cyan-200 to-purple-200">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-[9rem] font-bold mb-[-150px]">Auric AI</h1>
        </div>
      </section>
      <section className="h-[80vh] flex justify-center items-center">
        <div className="flex flex-col text-center text-[36px] font-bold">
          <p>
            {' '}
            <span className="text-[#888888]">수요 예측에 특화된</span> 고급 머신러닝/딥러닝 모델이
          </p>
          <p>
            {' '}
            <span className="text-[#888888]">고객사 제품의</span> 향후 6~12개월까지의 판매량을
            예측합니다.
          </p>
          <p>
            <span className="text-[#888888]">경험과 감에 의존하던 제품 수요 예측,</span>
          </p>
          <p className="mb-8">이제 데이터와 AI로 정확하게 예측하세요.</p>

          <div className="flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* Deepflow Automation Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-pc">
          <h2 className="text-center text-4xl font-bold text-blue-600 mb-16">Deepflow Automation</h2>

          <div className="relative flex items-center justify-center">
            {/* 왼쪽 - 내내의 데이터 입력팅 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold">내내의</div>
                  <div className="text-lg">데이터 입력팅</div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-700 max-w-xs">
                <p className="font-bold mb-1">날짜, 제품ID, 카테고리, 가격, 판매량 등</p>
                <p>고객사 데이터 업로드 후, 환경 데이터,</p>
                <p>파생피처 데이터 등 50,000여종 피처와 자동 결합</p>
              </div>
              <svg className="absolute left-48 top-24 w-24 h-2">
                <line x1="0" y1="1" x2="96" y2="1" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>

            {/* 중앙 - 3개의 연결된 원 */}
            <div className="flex items-center mx-8">
              {/* Data agent */}
              <div className="relative">
                <div className="w-40 h-40 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center">
                  <div className="text-center font-bold text-blue-600 text-lg">
                    Data agent
                  </div>
                </div>
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-700 max-w-xs">
                  <p>딥플로우의 데이터 에이전트가</p>
                  <p>AI 모델 학습을 위한</p>
                  <p>데이터 표준화 작업 실행</p>
                </div>
                <svg className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-12">
                  <line x1="1" y1="0" x2="1" y2="48" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>

              {/* Modeling */}
              <div className="relative -mx-4">
                <div className="w-40 h-40 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10">
                  <div className="text-center font-bold text-blue-600 text-lg">
                    Modeling
                  </div>
                </div>
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-700 max-w-xs">
                  <p>데이터 전처리,</p>
                  <p>4억가지역 조합의 피처 엔지니어링,</p>
                  <p>모델학습 등 모델링 자동화</p>
                </div>
                <svg className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-12">
                  <line x1="1" y1="0" x2="1" y2="48" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>

              {/* Prediction */}
              <div className="relative">
                <div className="w-40 h-40 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center">
                  <div className="text-center font-bold text-blue-600 text-lg">
                    Prediction
                  </div>
                </div>
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-700 max-w-xs">
                  <p>AI 예측 작업 수행</p>
                </div>
                <svg className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-12">
                  <line x1="1" y1="0" x2="1" y2="48" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>

              {/* 파란색 연결 패스 */}
              <svg className="absolute top-0 left-0 w-full h-40 pointer-events-none" style={{zIndex: -1}}>
                <path
                  d="M 80 80 Q 160 60, 240 80 Q 320 100, 400 80"
                  stroke="#60a5fa"
                  strokeWidth="60"
                  fill="none"
                  opacity="0.8"
                />
              </svg>
            </div>

            {/* 오른쪽 - 유저 인사이트 제공 */}
            <div className="flex flex-col items-center ml-8">
              <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold">유저</div>
                  <div className="text-lg">인사이트 제공</div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-700 max-w-xs">
                <p>사용자 친화적 UI를 통해</p>
                <p>인사이트를 제공</p>
              </div>
              <svg className="absolute right-48 top-24 w-24 h-2">
                <line x1="0" y1="1" x2="96" y2="1" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;

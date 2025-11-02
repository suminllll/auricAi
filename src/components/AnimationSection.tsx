'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimationSection() {
  // 섹션이 화면에 보이는지 여부를 추적하는 state
  const [isVisible, setIsVisible] = useState(false);
  // 중앙 원의 카운터 숫자 (0 -> 90.1%로 증가)
  const [centerCount, setCenterCount] = useState(0);
  // 섹션 DOM 요소를 참조하기 위한 ref
  const sectionRef = useRef<HTMLElement>(null);

  /**
   * IntersectionObserver를 사용한 화면 감지
   * - 사용자가 스크롤하여 섹션이 화면에 보이면 애니메이션 시작
   */
  useEffect(() => {
    // IntersectionObserver 생성
    // 콜백 함수: 요소가 화면에 보일 때 실행됨
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting: 요소가 화면에 보이면 true
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true); // 애니메이션 시작 트리거
        }
      },
      {
        // threshold: 요소의 30%가 화면에 보일 때 감지
        // 0.0 = 1px만 보여도 감지, 1.0 = 100% 전체가 보여야 감지
        threshold: 0.3
      }
    );

    // 섹션 요소 관찰 시작
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // cleanup: 컴포넌트 언마운트 시 관찰 중지
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  /**
   * 중앙 원의 숫자 카운터 애니메이션
   * - 섹션이 보이면 0에서 90.1%까지 빠르게 증가
   */
  useEffect(() => {
    if (isVisible) {
      let current = 0; // 현재 카운터 값
      const target = 90.1; // 목표 값 (90.1%)
      const increment = target / 50; // 증가량 (50단계로 나눔)

      // 30ms마다 숫자 증가
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCenterCount(target); // 목표 값 도달
          clearInterval(timer); // 타이머 종료
        } else {
          setCenterCount(current); // 숫자 업데이트
        }
      }, 30);

      // cleanup: 컴포넌트 언마운트 시 타이머 정리
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="flex items-center justify-center h-screen overflow-hidden">
      <div className="w-pc font-bold">
        <div className="text-[44px] text-center mb-20">
          <h1 className='text-[#888888]'>AURIC AI의 예측 기술력은</h1>
          <p>글로벌 시장에서 이미 검증되었습니다.</p>
        </div>
        <div className='relative flex justify-center items-center h-[500px]'>
          {/* 왼쪽 원 - 중앙 뒤에서 왼쪽으로 슬라이드 */}
          <div
            className='absolute flex flex-col items-center gap-5 transition-all duration-1000 ease-out'
            style={{
              /**
               * 3D Transform 애니메이션
               *
               * [애니메이션 후] isVisible = true:
               * - translate3d(-400px, 0, 0): 왼쪽으로 400px 이동 (x축: -400px, y축: 0, z축: 0)
               * - scale3d(1, 1, 1): 원본 크기 100% (x: 1, y: 1, z: 1)
               * - rotateX/Y/Z(0deg): 회전 없음 (정면)
               * - skew(0deg, 0deg): 기울임 없음
               *
               * [애니메이션 전] isVisible = false:
               * - translate3d(0, 0, 0): 중앙 위치 (이동 없음)
               * - scale3d(0.8, 0.8, 1): 80% 크기로 축소
               * - 나머지 동일
               */
              transform: isVisible
                ? 'translate3d(-400px, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                : 'translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: isVisible ? 1 : 0, // 투명도: 0 (투명) -> 1 (불투명)
              transformStyle: 'preserve-3d', // 3D 공간 유지 (자식 요소에 3D 변환 적용)
              zIndex: 1 // 레이어 순서: 중앙 원(z-index: 10) 뒤에 배치
            }}
          >
            <div className='rounded-full bg-[#D0DAFA] text-white w-[333px] h-[333px] flex items-center justify-center text-[88px] font-bold shadow-2xl'>
              64.1%
            </div>
            <p className='text-[28px]'>글로벌 M사</p>
          </div>

          {/* 중앙 원 - 항상 보이며 숫자 카운터 애니메이션 */}
          <div
            className='absolute flex flex-col items-center gap-5 z-10'
            style={{
              transformStyle: 'preserve-3d' // 3D 공간 유지
            }}
          >
            {/*
              bg-gradient-to-br: 좌상단에서 우하단으로 그라데이션
              from-[#2866EE] to-[#5B9FFF]: 진한 파란색에서 밝은 파란색으로
            */}
            <div className='rounded-full bg-gradient-to-br from-[#2866EE] to-[#5B9FFF] text-white w-[400px] h-[400px] flex items-center justify-center text-[120px] font-bold shadow-2xl'>
              {/* toFixed(1): 소수점 첫째자리까지 표시 (예: 90.1%) */}
              {centerCount.toFixed(1)}%
            </div>
            <p className='text-[32px]'>AURIC AI</p>
          </div>

          {/* 오른쪽 원 - 중앙 뒤에서 오른쪽으로 슬라이드 */}
          <div
            className='absolute flex flex-col items-center gap-5 transition-all duration-1000 ease-out'
            style={{
              /**
               * 3D Transform 애니메이션 (왼쪽 원과 반대 방향)
               *
               * [애니메이션 후] isVisible = true:
               * - translate3d(400px, 0, 0): 오른쪽으로 400px 이동 (x축: +400px)
               * - scale3d(1, 1, 1): 원본 크기 100%
               * - rotateX/Y/Z(0deg): 회전 없음
               * - skew(0deg, 0deg): 기울임 없음
               *
               * [애니메이션 전] isVisible = false:
               * - translate3d(0, 0, 0): 중앙 위치
               * - scale3d(0.8, 0.8, 1): 80% 크기로 축소
               */
              transform: isVisible
                ? 'translate3d(400px, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                : 'translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: isVisible ? 1 : 0, // 투명도: 0 (투명) -> 1 (불투명)
              transformStyle: 'preserve-3d', // 3D 공간 유지
              zIndex: 1 // 레이어 순서: 중앙 원 뒤에 배치
            }}
          >
            <div className='rounded-full bg-[#D0DAFA] text-white w-[333px] h-[333px] flex items-center justify-center text-[88px] font-bold shadow-2xl'>
              78.6%
            </div>
            <p className='text-[28px]'>글로벌 S사</p>
          </div>
        </div>
      </div>
    </section>
  );
}

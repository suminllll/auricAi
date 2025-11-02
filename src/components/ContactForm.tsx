'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  name: string;
  companyName: string;
  position: string;
  industry: string;
  email: string;
  phone: string;
  message: string;
  agreeToPrivacy: boolean;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // TODO: 실제 제출 로직 구현
    console.log(data);
    alert('문의가 접수되었습니다.');
    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* 이름 */}
        <div>
          <label className="block text-left mb-2 font-medium">
            이름 <span className="text-blue-600">*</span>
          </label>
          <input
            {...register('name', { required: '이름을 입력해주세요' })}
            type="text"
            placeholder="이름을 입력해주세요."
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* 기업명 */}
        <div>
          <label className="block text-left mb-2 font-medium">기업명</label>
          <input
            {...register('companyName')}
            type="text"
            placeholder="소속 기업명을 입력해주세요."
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* 직급/직위 */}
        <div>
          <label className="block text-left mb-2 font-medium">
            직급/직위 <span className="text-blue-600">*</span>
          </label>
          <input
            {...register('position', { required: '직급/직위를 입력해주세요' })}
            type="text"
            placeholder="직급/직위"
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.position && (
            <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
          )}
        </div>

        {/* 산업군 */}
        <div>
          <label className="block text-left mb-2 font-medium">산업군</label>
          <select
            {...register('industry')}
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="">산업군을 선택해주세요</option>
            <option value="제조">제조</option>
            <option value="유통">유통</option>
            <option value="금융">금융</option>
            <option value="IT">IT</option>
            <option value="서비스">서비스</option>
            <option value="기타">기타</option>
          </select>
        </div>

        {/* 이메일 */}
        <div>
          <label className="block text-left mb-2 font-medium">
            이메일 <span className="text-blue-600">*</span>
          </label>
          <input
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '유효한 이메일을 입력해주세요'
              }
            })}
            type="email"
            placeholder="email@impactive.ai"
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* 전화번호 */}
        <div>
          <label className="block text-left mb-2 font-medium">
            전화번호 <span className="text-blue-600">*</span>
          </label>
          <input
            {...register('phone', { required: '전화번호를 입력해주세요' })}
            type="tel"
            placeholder="- 없이 숫자만 입력"
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* 문의내용 */}
      <div className="mb-6">
        <label className="block text-left mb-2 font-medium">
          문의내용 <span className="text-blue-600">*</span>
        </label>
        <textarea
          {...register('message', { required: '문의내용을 입력해주세요' })}
          placeholder="문의하실 내용을 입력하세요."
          rows={8}
          className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* 개인정보 동의 */}
      <div className="mb-8">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('agreeToPrivacy', { required: '개인정보 처리방침에 동의해주세요' })}
            type="checkbox"
            className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">
            [필수] 요청하신 문의 내용에 대한 응대를 위해서 필요한 최소한의 개인정보 제공에 동의합니다.
          </span>
        </label>
        {errors.agreeToPrivacy && (
          <p className="text-red-500 text-sm mt-1">{errors.agreeToPrivacy.message}</p>
        )}
      </div>

      {/* 제출 버튼 */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-12 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '제출 중...' : '문의 접수하기'}
        </button>
      </div>
    </form>
  );
}

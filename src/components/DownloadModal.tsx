'use client';

import { useState } from 'react';
import { MdClose } from 'react-icons/md';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    email: '',
    phone: '',
    privacyAgree: false,
    marketingAgree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyAgree) {
      alert('개인정보 수집 이용 동의는 필수입니다.');
      return;
    }

    // TODO: 폼 제출 로직 추가
    console.log('Form submitted:', formData);
    alert('소개서 다운로드를 시작합니다.');
    onClose();

    // Reset form
    setFormData({
      name: '',
      department: '',
      email: '',
      phone: '',
      privacyAgree: false,
      marketingAgree: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">소개서 다운로드</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <MdClose size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-start">
          {/* 담당자 이름 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-0">
              담당자 이름 <span className="text-red-500">*</span>
            </label><input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className=" w-full px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="홍길동"
            />
          </div>

          {/* 담당자 부서 */}
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              담당자 부서 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border  text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="마케팅팀"
            />
          </div>

          {/* 업무용 이메일 주소 */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              업무용 이메일 주소 <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@company.com"
            />
          </div>

          {/* 휴대전화 번호 */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              휴대전화 번호 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              className="w-full px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="010-1234-5678"
            />
          </div>

          {/* 개인정보 수집 이용 동의 */}
          <div className="pt-4 border-t">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="privacyAgree"
                checked={formData.privacyAgree}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                <span className="font-medium">(필수)</span> 개인정보 수집 이용 동의
              </span>
            </label>
            <p className="ml-7 mt-1 text-xs text-gray-500">
              입력하신 정보는 소개서 제공 목적으로만 사용됩니다.
            </p>
          </div>

          {/* 마케팅 활용 및 정보 수신 동의 */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="marketingAgree"
                checked={formData.marketingAgree}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                <span className="font-medium">(선택)</span> 마케팅 활용 및 정보 수신 동의
              </span>
            </label>
            <p className="ml-7 mt-1 text-xs text-gray-500">
              제품 업데이트 및 마케팅 정보를 받아보실 수 있습니다.
            </p>
          </div>

          {/* 제출 버튼 */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white font-medium rounded-full mt-6"
            >
              제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

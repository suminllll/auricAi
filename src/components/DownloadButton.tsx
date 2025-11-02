'use client';

import { useState } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import DownloadModal from './DownloadModal';

export default function DownloadButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-lg"
      >
        <MdOutlineFileDownload size={24} />
        소개서 다운로드 하기
      </button>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

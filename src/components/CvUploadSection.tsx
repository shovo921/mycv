import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, 
  FileText, 
  Download, 
  Trash2, 
  Eye, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck, 
  RefreshCw,
  Sparkles,
  FileDown,
  Printer,
  FileCode
} from 'lucide-react';
import { UploadedCV } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvUploadSectionProps {
  darkMode: boolean;
  onOpenDigitalCv: () => void;
}

export const CvUploadSection: React.FC<CvUploadSectionProps> = ({ darkMode, onOpenDigitalCv }) => {
  const [uploadedCv, setUploadedCv] = useState<UploadedCV | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load persisted CV from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_custom_cv');
      if (saved) {
        const parsed = JSON.parse(saved);
        setUploadedCv(parsed);
      }
    } catch (e) {
      console.error('Error loading saved CV:', e);
    }
  }, []);

  const handleFileProcess = (file: File) => {
    // Check format
    const validExtensions = ['pdf', 'doc', 'docx', 'png', 'jpg', 'jpeg'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

    if (!validExtensions.includes(fileExtension)) {
      setUploadStatus('error');
      setStatusMessage('Please upload a valid document: PDF, DOC, DOCX, PNG, or JPG.');
      return;
    }

    // Check size limit (max 12MB)
    if (file.size > 12 * 1024 * 1024) {
      setUploadStatus('error');
      setStatusMessage('File size exceeds 12MB limit. Please upload a smaller file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const resultData = event.target?.result as string;

      const newCvRecord: UploadedCV = {
        id: `cv-${Date.now()}`,
        name: file.name,
        size: file.size,
        type: file.type || fileExtension,
        uploadDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        dataUrl: resultData
      };

      setUploadedCv(newCvRecord);
      setUploadStatus('success');
      setStatusMessage(`Successfully uploaded "${file.name}"! Available for preview and download.`);

      // Persist to localStorage
      try {
        localStorage.setItem('portfolio_custom_cv', JSON.stringify(newCvRecord));
      } catch (err) {
        console.warn('Could not persist large CV dataUrl to localStorage:', err);
      }
    };

    reader.onerror = () => {
      setUploadStatus('error');
      setStatusMessage('Failed to read file. Please try again.');
    };

    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
  };

  const handleRemoveCv = () => {
    setUploadedCv(null);
    localStorage.removeItem('portfolio_custom_cv');
    setUploadStatus('idle');
    setStatusMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDownloadUploaded = () => {
    if (!uploadedCv?.dataUrl) return;
    const a = document.createElement('a');
    a.href = uploadedCv.dataUrl;
    a.download = uploadedCv.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <section id="cv-section" className={`py-20 border-t ${
      darkMode ? 'bg-slate-950/70 border-slate-800/80' : 'bg-slate-50/80 border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50">
            <Upload className="w-3.5 h-3.5" />
            <span>CV & RESUME MANAGEMENT CENTER</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Curriculum Vitae & Document Hub
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Upload your latest custom CV file for instant in-browser inspection, or view and export my verified ATS-ready developer resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Drag & Drop CV Upload Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Upload Custom CV / Resume
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  PDF, DOCX, PNG, JPG (Max 12MB)
                </span>
              </div>

              {/* Upload Drop Zone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                  isDragging
                    ? 'border-cyan-400 bg-cyan-950/30 scale-[1.01]'
                    : darkMode
                    ? 'border-slate-700 hover:border-cyan-500/70 bg-slate-950/50 hover:bg-slate-900/60'
                    : 'border-slate-300 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/50'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="hidden"
                  id="cv-file-input"
                />

                <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <Upload className="w-7 h-7" />
                </div>

                <p className={`font-semibold text-sm mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Drag and drop your CV here, or <span className="text-cyan-400 underline">browse computer</span>
                </p>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Supports PDF documents, Word files, and high-resolution scanned transcripts
                </p>
              </div>

              {/* Status Alert */}
              {statusMessage && (
                <div className={`mt-4 p-3 rounded-xl flex items-center gap-2.5 text-xs ${
                  uploadStatus === 'success'
                    ? 'bg-emerald-950/40 border border-emerald-800 text-emerald-300'
                    : 'bg-rose-950/40 border border-rose-800 text-rose-300'
                }`}>
                  {uploadStatus === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Uploaded File Details Card */}
              {uploadedCv && (
                <div className={`mt-6 p-5 rounded-xl border ${
                  darkMode ? 'bg-slate-950/70 border-cyan-900/60' : 'bg-blue-50/60 border-blue-200'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`font-bold text-sm truncate max-w-xs ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {uploadedCv.name}
                        </h4>
                        <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                          <span>{formatFileSize(uploadedCv.size)}</span>
                          <span>•</span>
                          <span>Uploaded {uploadedCv.uploadDate}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleRemoveCv}
                      className="text-slate-400 hover:text-rose-400 transition-colors p-1"
                      title="Remove uploaded CV"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Actions for uploaded CV */}
                  <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-slate-800/60">
                    <button
                      onClick={() => setPreviewOpen(true)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                        darkMode ? 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border-slate-700' : 'bg-white hover:bg-slate-100 text-blue-700 border-slate-300 shadow-xs'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Document</span>
                    </button>

                    <button
                      onClick={handleDownloadUploaded}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download File</span>
                    </button>

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white ml-auto"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Replace</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Built-in Digital ATS Resume Options */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`p-8 rounded-2xl border flex flex-col justify-between h-full ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Verified Digital ATS Resume
                      </h3>
                      <p className="text-xs font-mono text-cyan-400">
                        Always Up-to-Date & Tailored for Engineering Teams
                      </p>
                    </div>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Our digital resume compiles all verified data directly from Padma Bank PLC, Kaicom Solutions Japan, Jahangirnagar University MSc, and certified DevOps credentials. Cleanly formatted to pass Application Tracking Systems (ATS) with 100% parse accuracy.
                </p>

                {/* Checklist of what's inside */}
                <div className="space-y-2.5 mb-8">
                  {[
                    'Full 5-year employment chronology with detailed system impact metrics',
                    'Jahangirnagar University MSc (CGPA 3.45) & IUBAT BCSE (CGPA 3.49)',
                    'Official Page Cloud Certified DevOps Engineer credential',
                    'Padma Bank AML/CFT regulatory examination record',
                    'Categorized technical skill proficiencies and GitHub repositories'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons for Digital Resume */}
              <div className="space-y-3 pt-6 border-t border-slate-800/60">
                <button
                  id="cv-view-ats-resume-btn"
                  onClick={onOpenDigitalCv}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Full Interactive ATS Resume</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={onOpenDigitalCv}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                    }`}
                  >
                    <Printer className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Print to PDF</span>
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Requesting Official CV of Shuv Chandra Das`}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                    }`}
                  >
                    <FileDown className="w-3.5 h-3.5 text-blue-400" />
                    <span>Email for Custom CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal for previewing uploaded CV */}
        {previewOpen && uploadedCv && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl border flex flex-col overflow-hidden ${
              darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
            }`}>
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-sm truncate max-w-md">{uploadedCv.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadUploaded}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => setPreviewOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Viewer Body */}
              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/40 min-h-[400px]">
                {uploadedCv.dataUrl?.startsWith('data:image/') ? (
                  <img
                    src={uploadedCv.dataUrl}
                    alt="Uploaded CV Preview"
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                  />
                ) : uploadedCv.dataUrl?.startsWith('data:application/pdf') ? (
                  <iframe
                    src={uploadedCv.dataUrl}
                    title="PDF CV Preview"
                    className="w-full h-[70vh] rounded-lg border border-slate-700"
                  />
                ) : (
                  <div className="text-center p-8 space-y-4">
                    <FileCode className="w-16 h-16 text-cyan-400 mx-auto" />
                    <h4 className="text-lg font-bold">Document Preview Ready</h4>
                    <p className="text-sm text-slate-400 max-w-md">
                      {uploadedCv.name} ({formatFileSize(uploadedCv.size)}) is stored locally in your browser session.
                    </p>
                    <button
                      onClick={handleDownloadUploaded}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 inline-flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Document</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

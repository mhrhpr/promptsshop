export function OmindMark() {
  return (
    <svg className="omind-mark" viewBox="0 0 42 42" aria-hidden="true">
      <path d="M31 11a15 15 0 1 0 2.5 17.4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M28.6 8.5h8.2v8.2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 31a15 15 0 1 0-2.5-17.4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M13.4 33.5H5.2v-8.2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function Brand() {
  return <div className="brand" aria-label="OMIND PromptShop"><OmindMark /><span>OMIND</span><i>/</i><b>PromptShop</b></div>
}


type ATMButtonProps={
label : string;
className : string;
onClick : ()=>void
}

const ATMButton = ({label ,onClick , className}:ATMButtonProps) => {
  return (
    <div>
        <button
        className={className}
        onClick ={onClick}
        >{label}</button>


    </div>
  )
}

export default ATMButton
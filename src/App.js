import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='w-[1572px] h-[608px] flex items-center justify-center'>
        <div className='h-[608] flex items-center justify-center'>
          <div className='flex flex-col w-[655px] gap-4'>
            <p className='text-[50px] font-lato leading-[50px] text-start font-extrabold'>
              Delivering the <a className='text-blue-700'>best result</a> and support for our partners.
            </p>
            <p className='text-[30px] font-lato leading-10 text-start pr-2'>This is not our first rodeo, we aim to optimize your campaigns to drive the best possible return on your investment by looking at not only the data but listening to clients.</p>
          </div>
          <div className='relative w-[616px] h-[354px] flex gap-2'>
            <div className='w-[273px] h-[330px] flex flex-col items-center justify-center gap-5 border-[5px] rounded-[5px] border-[#DCDEDC]'>
              <img src="comma.svg" alt="comma" className='' />
              <div className='relative py-2 w-[190px]'>
                <p className='text-[25px] leading-[30px] italic font-lato text-center'>AMP does all of the paperwork behind the scenes for co-op reimbursement.</p>
                <span className='absolute w-11 border-[4px] border-[#005499] left-[70px] -bottom-3 rounded-full' />
              </div>
              <p className='text-[15px] font-lato leading-[18px] text-center font-bold'>Cove Equipment</p>
            </div>
            <div className='w-[273px] h-[330px] flex flex-col items-center justify-center gap-5 border-[5px] rounded-[5px] border-[#DCDEDC]'>
              <img src="comma.svg" alt="comma" className='' />
              <div className='relative py-2 w-[190px]'>
                <p className='text-[25px] leading-[30px] italic font-lato text-center'>Set it and forget it, plug and play. It’s like a 24/7 salesman working online for you.</p>
                <span className='absolute w-11 border-[4px] border-[#005499] left-[70px] -bottom-3 rounded-full' />
              </div>
              <p className='text-[15px] font-lato leading-[18px] text-center font-bold'>Delta Power Equipment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

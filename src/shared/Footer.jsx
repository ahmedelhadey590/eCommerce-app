import logo2 from '../assets/logo2.png'

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
        <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className='md:w-1/2 space-y-8'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                <img src={logo2} alt=""  className='w-10 inline-block items-center'/><span className='text-white'>Company</span>
                </a>
                <p className='md:w-1/2'>Master programming with our comprehensive, engaging, and expert-led courses,
                designed to be both affordable and innovative</p>
                <div>
                    <input type="email" name="email" id="email" placeholder='please enter ur email'
                    className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                    <input type="submit" value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2
                    cursor-pointer hover:bg-white hover: text-primary duration-300 transition-all' />
                </div>
                </div>
            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-x1'>Platform</h4>
                            <ul className='space-y-3'>
                                    <a href="/" className='blockhover: text-gray-300'>Overview</a> 
                                    <a href="/" className='block I hover: text-gray-300'>About</a> 
                                    <a href="/" className='block hover text-gray-300'>Pricing</a>
                                    <a href="/" className='block I hover:text-gray-300'>Features</a> 
                            </ul>
                    </div>
                
                <div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-x1'>Help</h4>
                            <ul className='space-y-3'>
                                    <a href="/" className='blockhover: text-gray-300'>how we work</a> 
                                    <a href="/" className='block I hover: text-gray-300'>ask questions</a> 
                                    <a href="/" className='block hover text-gray-300'>inroll to course</a>
                                    <a href="/" className='block I hover:text-gray-300'>Features</a> 
                            </ul>
                    </div>
                </div> 
                <div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-x1'>Contacts</h4>
                            <ul className='space-y-3'>
                                    <p  className=' hover: text-gray-300'>01000000</p> 
                                    <p  className=' hover: text-gray-300'>1234567</p> 
                                    <p  className=' hover: text-gray-300'>all rights</p>
                                    <p  className=' hover: text-gray-300'>0226216878</p> 
                            </ul>
                </div>
                </div>    
            </div> 
        </div>
    </div>
  );
};

export default Footer

import Certification from './Certification';
import EductionCard from './EductionCard';


function Education() {
    return (
        <div className="lg:px-12 px-4 py-40" id='Education'>
            <div className=" text-headingcolor mb-20">
                <p className="text-xl font-semibold mb-5" id='education'>Education</p>
                <h2 className="md:text-5xl text-4xl font-bold">Education</h2>
            </div>
            <div className='flex lg:flex-row flex-col mb-7'>
                <div className='w-full lg:w-1/2 mb-8'>
                    <EductionCard></EductionCard>
                </div>
                <div className='w-full lg:w-1/2'>
                    <Certification></Certification>
                </div>
            </div>
        </div>
    )
}
export default Education
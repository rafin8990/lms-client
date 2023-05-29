import React from 'react';
import pic1 from '../../../assets/header/group-african-kids-paying-attention-class.jpg'
import pic2 from '../../../assets/header/pretty-young-student-with-big-glasses-near-some-books-smiling-white-background.jpg'
import pic3 from '../../../assets/header/young-woman-teacher-wearing-glasses-sitting-school-desk-front-blackboard-classroom-globe-checking-class-register-holding-pointer-looking-displeased-raising-arm-displeasure.jpg'
import { FcCheckmark } from "react-icons/fc";

const OurService = () => {
    return (
        <div className=''>
            <h1 className='bg-[#FFFAE8] text-xl md:text-4xl font-bold text-center lg:pt-10'>Our Services</h1>

            <div>
                {/* content one  */}
                <div className='bg-[#FFFAE8] md:flex justify-around items-center lg:p-32'>
                    <div className='md:w-1/2 mt-5'>
                        <img className='w-2/3 rounded-xl' src={pic1} alt="" />
                    </div>
                    <div className='md:w-1/2 '>
                        <div>
                            <h1 className='text-lg md:text-xl font-bold'>1.CORPORATE WRITING SERVICES</h1>
                            <p>The right attitude of professionalism and manner in our words combined will take your
                                business to new heights. From presentations to proposals, our high-quality and effective
                                content serves as a purpose to make your work stand out in the corporate world.</p>
                        </div>
                        <div className='md:text-xl flex justify-center mx-5 mt-5'>
                            <ul>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span> Words should be short, crisp and to the point</li>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span> Giving a clear-cut idea on what services are offered </li>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span> Use of key words to relate with the customer</li>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span> Attach samples to give a gist of what and how the content is made (optional) </li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* content two  */}
                <div className='bg-[#FCD752] md:flex justify-around items-center lg:p-32'>
                    <div className='md:w-1/2 mx-10'>
                        <div>
                            <h1 className='text-lg md:text-xl font-bold'>2.BUSINESS CONTENT SERVICES</h1>
                            <p>Define your purpose with words meticulously crafted to attract your target audience. Our
                                team of professionals are equipped with the best of skills in SEO to make your business
                                stand remarkable in the market</p>
                        </div>
                        <div className='md:text-xl flex justify-center mx-5 mt-5'>
                            <ul>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span> Website Content - Rebrand your image in the social world with comprehensive
                                    content for your website.
                                </li>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span>  Brand building content – Your brand is your reputation, therefore our content which
                                    is consistent in communication will ensure to keep your reputation at bay. </li>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span>Social Media Content – The use of social media in today’s era is tremendous as it
                                    serves as the most affective piece of communication. Our engaging and appealing
                                    content works to do just that to make it easier for you to interact with your
                                    audience.</li>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span>  Political Content – Increase the credibility in your political campaigns with words
                                    that resonate with your goals and values. </li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-1/2 mt-5 lg:ml-10'>
                        <img className=' rounded-xl' src={pic2} alt="" />
                    </div>
                </div>
                {/* content three */}
                <div className='bg-[#FFFAE8] md:flex justify-around items-center lg:p-32'>
                    <div className='md:w-1/2 mt-5 ml-10'>
                        <img className='w-2/3 rounded-xl' src={pic3} alt="" />
                    </div>
                    <div className='md:w-1/2 '>
                        <div>
                            <h1 className='text-lg md:text-xl font-bold'>3.EDUCATIONAL CONTENT SERVICES</h1>
                            <p>Our educational content services are specifically made for all your academic purposes. </p>
                        </div>
                        <div className='md:text-xl flex justify-center mx-5 mt-5'>
                            <ul>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span> Essay writing - Our content helps you craft cohesive essays for your projects. </li>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span> Story/script writing - Have an idea in mind but don’t know how to put it in words?
                                    Avail our descriptive and detailed content on stories/scripts for your ideas to run
                                    free on paper</li>
                                <li className='flex'><span className='mr-3'><FcCheckmark></FcCheckmark></span>Translations – Whether it be translating from English to Hindi or Hindi to Gujarati, we
                                    offer translation services to generate a positive multilingual experience for your
                                    readers. </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurService;


const Contact = () => {
    return (
        <>
            <div className="flex-col md:flex lg:flex-row items-center justify-evenly bg-base-200 my-12 py-20 px-3 md:px-2">
                <div>
                    <h3 className="text-5xl font-bold mb-4">Contact</h3>
                    <p className=" mb-8">Looking forward to hearing from you</p>

                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className=" mb-4">123-456-7890</p>

                    <h3 className="text-lg font-bold">Email</h3>
                    <p className=" mb-8">astahmid777@gmail.com</p>
                </div>
                <div>
                    <form>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="first name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="name" name="last name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="email" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="subject" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex items-center gap-6 mb-8">
                            <div className="form-control md:w-3/4">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="message" className="input input-bordered w-full py-20" />
                                </label>
                            </div>
                            <div className="flex justify-center">
                                <button className="btn btn-outline rounded-full h-40 w-40 text-xl font-bold bg-[#EEA302] hover:bg-white hover:text-black border-2 mt-2 md:mt-8">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
};

export default Contact;
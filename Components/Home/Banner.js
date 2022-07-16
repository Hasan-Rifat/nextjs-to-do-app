import React from "react";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className=" py-36 bg-base-200">
          <div className="grid max-w-7xl mx-auto px-4 grid-cols-1 md:justify-between ">
            <div className="text-center lg:text-left ">
              <h1 className="text-5xl font-bold text-center ">Add Your Task</h1>
            </div>
            <div className="card flex-shrink-0 w-3/6 mx-auto  shadow-2xl bg-base-100  my-10 p-5">
              <div className="card-body">
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Task Title"
                      name="taskTitle"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      name="taskDescription"
                      type="text"
                      placeholder="Task Description"
                      className="textarea textarea-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">
                      Submit Task
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddToys = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(
      "http://localhost:5000/addToy",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          Swal.fire({
            title: "Your information has been submitted successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          reset();
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Supper Kiddo | Add Toys </title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center pt-32 pb-5 text-violet-900">Add a Toy</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold  text-violet-900">Picture URL</span>
                </label>
                <input
                  type="text"
                  placeholder="url"
                  className="input input-bordered bg-white"
                  {...register("url")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold  text-violet-900">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered bg-white"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold  text-violet-900">Sub Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Sub Category"
                  className="input input-bordered bg-white"
                  {...register("category")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold  text-violet-900">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered bg-white"
                  {...register("price")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold  text-violet-900">Ratings</span>
                </label>
                <input
                  type="text"
                  placeholder="Ratings"
                  className="input input-bordered bg-white"
                  {...register("ratings")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold  text-violet-900">Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered bg-white"
                  {...register("quantity")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold  text-violet-900">Detail Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 bg-white"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-active btn-primary">
                  <input type="submit" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
};

export default AddToys;

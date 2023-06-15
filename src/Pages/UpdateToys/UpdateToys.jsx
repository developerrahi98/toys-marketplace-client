import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const toys = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(
      `https://toys-marketpalace-server-developerrahi98.vercel.app/addToy/${toys._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          Swal.fire({
            title: "Your information has been updated successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          form.reset();
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="url"
                  className="input input-bordered"
                  {...register("url")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Sub Category"
                  className="input input-bordered"
                  {...register("category")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  {...register("price")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ratings</span>
                </label>
                <input
                  type="text"
                  placeholder="Ratings"
                  className="input input-bordered"
                  {...register("ratings")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered"
                  {...register("quantity")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-active btn-primary">
                  <input type="submit" value="Update" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateToys;

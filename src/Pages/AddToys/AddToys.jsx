import { useForm } from "react-hook-form";

const AddToys = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
                  <input type="submit" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddToys;

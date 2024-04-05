import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useForm } from "react-hook-form";

export default function Feedback({ show, setShow }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const formSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Offcanvas show={show} onHide={() => setShow(false)}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              {...register("firstName", { required: true })}
              placeholder="xyz"
            />
            {errors?.firstName && (
              <span className="text-danger">firstname required</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              {...register("lastName", { required: true })}
              placeholder="xyz"
            />
            {errors?.lastName && (
              <span className="text-danger">firstname required</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              rows="3"
              {...register("address", { required: true })}
            ></textarea>
            {errors?.address && (
              <span className="text-danger">firstname required</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              {...register("country", { required: true })}
              placeholder="india"
            />
            {errors?.country && (
              <span className="text-danger">firstname required</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              placeholder="name@example.com"
            />
            {errors?.email?.type === "required" && (
              <span className="text-danger">email is required</span>
            )}
            {errors?.email?.type === "pattern" && (
              <span className="text-danger">please enter valid email</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              {...register("phone", {
                required: true,
                maxLength: 10,
                minLength: 10,
              })}
            ></input>
            {errors?.phone?.type === "maxLength" && (
              <span className="text-danger">phone number not valid</span>
            )}
            {errors?.phone?.type === "required" && (
              <span className="text-danger">phone number required</span>
            )}
            {errors?.phone?.type === "minLength" && (
              <span className="text-danger">phone number not valid</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

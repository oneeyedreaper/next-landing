import React, { useRef } from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import ButtonPrimary from "../misc/ButtonPrimary";
import { FaPaperPlane } from "react-icons/fa";

import emailjs from "@emailjs/browser";

export default function Sheesh() {
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const form = useRef();
	const closeHandler = () => {
		setVisible(false);
		console.log("closed");
	};
	const mail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_1wgsy3f",
				"template_495k8fo",
				form.current,
				"56spPQ7S3T0kHaU4M"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		setVisible(false);
		console.log("closed");
	};
	return (
		<div>
			<Button
				size={"xl"}
				className={
					"py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none "
				}
				color={"f53855"}
				onPress={handler}
			>
				Get Started
			</Button>
			{/* <ButtonPrimary auto color="gradient" shadow onPress={handler}>
				Get Started
			</ButtonPrimary> */}

			<Modal
				closeButton
				blur
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
			>
				<Modal.Header>
					<Text b size={18} id="modal-title">
						Interested?
						<Row justify="space-between">
							<Text weight={"normal"} size={18}>
								Let us reach out to you.
							</Text>
						</Row>
					</Text>
				</Modal.Header>
				<form ref={form} onSubmit={mail}>
					<Modal.Body>
						<Input
							clearable
							bordered
							fullWidth
							color="error"
							size="lg"
							placeholder="Name"
							name="name"
							// contentLeft={<Mail fill="currentColor" />}
						/>
						<Input
							clearable
							bordered
							fullWidth
							type="email"
							color="error"
							name="email"
							size="lg"
							placeholder="Email"
							// contentLeft={<Mail fill="currentColor" />}
						/>
						<Input
							clearable
							bordered
							fullWidth
							type="tel"
							name="phone"
							color="error"
							size="lg"
							placeholder="Phone"
							// contentLeft={<Mail fill="currentColor" />}
						/>

						{/* <Row justify="space-between">
						<Checkbox>
						<Text size={14}>Remember me</Text>
						</Checkbox>
						<Text size={14}>Forgot password?</Text>
					</Row> */}
					</Modal.Body>
					<Modal.Footer>
						<Button auto flat type="submit" color="error">
							<FaPaperPlane />
						</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</div>
	);
}

// import { Fragment, useRef, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// export default function Example() {
// 	const [open, setOpen] = useState(true);

// 	const cancelButtonRef = useRef(null);

// 	return (
// 		<Transition.Root show={open} as={Fragment}>
// 			<Dialog
// 				as="div"
// 				className="relative z-10"
// 				initialFocus={cancelButtonRef}
// 				onClose={setOpen}
// 			>
// 				<Transition.Child
// 					as={Fragment}
// 					enter="ease-out duration-300"
// 					enterFrom="opacity-0"
// 					enterTo="opacity-100"
// 					leave="ease-in duration-200"
// 					leaveFrom="opacity-100"
// 					leaveTo="opacity-0"
// 				>
// 					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
// 				</Transition.Child>

// 				<div className="fixed inset-0 z-10 overflow-y-auto">
// 					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
// 						<Transition.Child
// 							as={Fragment}
// 							enter="ease-out duration-300"
// 							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
// 							enterTo="opacity-100 translate-y-0 sm:scale-100"
// 							leave="ease-in duration-200"
// 							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
// 							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
// 						>
// 							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
// 								<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
// 									<div className="sm:flex sm:items-start">
// 										<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// 											<ExclamationTriangleIcon
// 												className="h-6 w-6 text-red-600"
// 												aria-hidden="true"
// 											/>
// 										</div>
// 										<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
// 											<Dialog.Title
// 												as="h3"
// 												className="text-base font-semibold leading-6 text-gray-900"
// 											>
// 												Deactivate account
// 											</Dialog.Title>
// 											<div className="mt-2">
// 												<p className="text-sm text-gray-500">
// 													Are you sure you want to deactivate your account? All
// 													of your data will be permanently removed. This action
// 													cannot be undone.
// 												</p>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
// 									<button
// 										type="button"
// 										className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
// 										onClick={() => setOpen(false)}
// 									>
// 										Deactivate
// 									</button>
// 									<button
// 										type="button"
// 										className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
// 										onClick={() => setOpen(false)}
// 										ref={cancelButtonRef}
// 									>
// 										Cancel
// 									</button>
// 								</div>
// 							</Dialog.Panel>
// 						</Transition.Child>
// 					</div>
// 				</div>
// 			</Dialog>
// 		</Transition.Root>
// 	);
// }

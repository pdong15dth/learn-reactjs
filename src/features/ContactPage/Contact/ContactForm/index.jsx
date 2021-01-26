import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'features/Todo/components/form-control/inputField';
import TextAreaField from 'features/Todo/components/form-control/TextAreaField';
ContactForm.propTypes = {

};

function ContactForm(props) {
    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Vui lòng nhập đầy đủ Họ & Tên.')
            .test('Ít nhất phải có 2 từ.', 'Ít nhất phải có 2 từ.', (values) => {
                return values.split(' ').length >= 2
            }),
        email: yup.string()
            .required('Please enter your Email')
            .email('Vui lòng nhập địa chỉ Email'),
        phone: yup.string()
            .required('Vui lòng nhập số điện thoại.'),
        subject: yup.string()
            .required('Vui lòng nhập tiêu đề.'),
        message: yup.string()
            .required('Vui lòng nhập tin nhắn bạn muốn gửi.'),
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props
        console.log("doongph3")
        if (onSubmit) {
            onSubmit(values)
        }
        form.reset()
    };

    return (
        <form id="contactForm" >
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        <InputField className='form-control' name="fullName" label="Full Name" form={form}></InputField>
                        {/* <input type="text" name="name" id="name" class="form-control" required
                            data-error="Please enter your name" placeholder="Name" /> */}
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        {/* <input type="email" name="email" id="email" class="form-control" required
                            data-error="Please enter your email" placeholder="Email" /> */}
                        <InputField className="form-control" name="email" label="Email" form={form}></InputField>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        {/* <input type="text" name="phone_number" id="phone_number" required
                            data-error="Please enter your number" class="form-control"
                            placeholder="Phone" /> */}
                        <InputField className="form-control" name="phone" label="Phone" form={form}></InputField>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        {/* <input type="text" name="msg_subject" id="msg_subject" class="form-control"
                            required data-error="Please enter your subject" placeholder="Subject" /> */}
                        <InputField className="form-control" name="subject" label="Subject" form={form}></InputField>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        {/* <textarea name="message" class="form-control" id="message" cols="30" rows="5"
                            required data-error="Write your message"
                            placeholder="Your Message"></textarea> */}
                        <TextAreaField name="message" className="form-control" id="message" cols="30" rows="5"
                            required data-error="Write your message"
                            placeholder="Your Message" form={form} placeholder="Message"></TextAreaField>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-primary" onClick={form.handleSubmit(handleSubmit)}>
                        GỬI LIÊN HỆ
        </button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;
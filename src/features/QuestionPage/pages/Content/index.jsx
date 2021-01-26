import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Question from '../Question';
import './styles.scss';

function ContentQuestion(props) {
    const listQuestions = [
        {
            id: 1,
            text: "What was the name of first computer designed by Charlse Babbage?",
            choices: [
                {
                    text: "Analytical Engine"
                },
                {
                    text: "Difference Engine"
                },
                {
                    text: "Colossus"
                },
                {
                    text: "ENIAC"
                }
            ]
        },
        {
            id: 2,
            text: "Who invented the punch card?",
            choices: [
                {
                    text: "Charles Babbage"
                },
                {
                    text: "Semen Korsakov"
                },
                {
                    text: "Herman Hollerith"
                },
                {
                    text: "Joseph Marie Jacquard"
                }
            ]
        },
        {
            id: 3,
            text: "Step-by-step instructions that solve a problem are called",
            choices: [
                {
                    text: "An algorithm"
                },
                {
                    text: "A list"
                },
                {
                    text: "A Plan"
                },
                {
                    text: "A structure"
                }
            ]
        }
    ]
    const currentQuestion = null
    const currentIndex = 0
    // const [questions, setQuestions] = useState(listQuestions[0])
    const [questions, setQuestions] = useState(currentQuestion)
    const chooseQuestion = (question, index) => {
        const newQuestion = question
        setQuestions(newQuestion)
        console.log('pham dong', newQuestion)
    }

    const nextQuestion = () => {
        // setCrQuestion()
    }

    const prevQuestion = () => {

    }

    const listNumberQuestion = (listQuestions) => {
        if (questions) {
            return listQuestions.map((list, index) => <NavLink to='#' onClick={() => chooseQuestion(list, index)} id={list.id} className={questions.id === list.id ? "page-numbers current" : "page-numbers"}>{list.id}</NavLink>)
        } else {
            return listQuestions.map((list, index) => <NavLink to='#' onClick={() => chooseQuestion(list, index)} id={list.id} className={"page-numbers"}>{list.id}</NavLink>)
        }
    }

    return (
        <>
            <section class="contact-area ptb-110">
                <div class="container">
                    <div class="section-title">
                        <div class="custom-content-title text-center">
                            <h2>Bộ Đề Thi Thử Lý Thuyết Lái Xe Ô tô B2 600 Câu</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-md-12">
                            <div class="col-lg-12 col-md-12">
                                <div class="cart-totals">
                                    <h3>Kết quả bài làm</h3>
                                    <div className='ket-qua-bai-thi'>
                                        <div><span name='de-so'>Đề số: </span><label className='text-green-color' htmlFor="de-so">01</label></div>
                                        <div><span name='so-cau-sai'>Số câu đúng: </span><label className='text-red-color' htmlFor="so-cau-sai">0</label></div>
                                        <div><span name='so-cau-sai'>Số câu sai: </span><label className='text-red-color' htmlFor="so-cau-sai">35</label></div>
                                        <div><span name='ket-qua'>Kết quả: </span><label htmlFor="ket-qua"><strong className='text-red-color'>KHÔNG ĐẠT - Sai câu điểm liệt</strong></label></div>
                                        <div><span name='dap-an-sai'>Đáp án sai: </span><label htmlFor="dap-an-sai" className='text-red-color'>Tô màu đỏ</label></div>
                                        <div><span name='dap-an-dung'>Đáp án đúng: </span><label htmlFor="dap-an-dung" className='text-blue-color'>Tô màu xanh</label></div>
                                        <div>Kiểm tra lại đáp án đúng bên dưới!</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="cart-totals">
                                    <h3>Câu hỏi</h3>
                                    <div class="pagination-area">
                                        {listNumberQuestion(listQuestions)}
                                    </div>
                                    {/* className={questions.id === list.id ? "page-numbers current" : "page-numbers"} */}
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="cart-totals">
                                    <div class="custom-title-card">
                                        <h3>Thời gian còn lại: 21:34</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="cart-totals">
                                    <div class="custom-title-card">
                                        <button className="btn btn-primary"> NỘP BÀI THI</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <Question question={questions}>
                                <a href=" " class="btn btn-primary order-btn">Câu trước</a>
                                <a href=" " class="btn btn-primary order-btn custom-float-right">Câu tiếp theo</a>
                            </Question>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContentQuestion;
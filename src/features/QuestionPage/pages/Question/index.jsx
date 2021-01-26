import React from 'react';
import PropTypes from 'prop-types';

Question.propTypes = {
    question: []
};

function Question(props) {
    console.log(props)
    const clickQuestion = (question) => {
        console.log(question.id)
    }
    return (
        <>
            <div class="cart-totals" onClick={() => clickQuestion(props.question)}>
                <h3>Câu hỏi {props.question?.id}:</h3>
                <strong className='ket-qua-bai-thi'>Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?</strong>
                <div class="order-details">
                    <div class="payment-box">
                        <div class="payment-method">
                            <p>
                                <input
                                    type="radio"
                                    id="answer-1"
                                    name="radio-group"
                                />
                                <label for="answer-1">1- Phần mặt đường và lề đường.</label>
                            </p>
                            <p>
                                <input type="radio" id="answer-2" name="radio-group" />
                                <label for="answer-2">2- Phần đường xe chạy.</label>
                            </p>
                            <p>
                                <input
                                    type="radio"
                                    id="answer-3"
                                    name="radio-group"
                                />
                                <label for="answer-3">3- Phần đường xe cơ giới.</label>
                            </p>
                        </div>
                    </div>
                    {props.children}
                </div>

            </div>
        </>
    );
}

export default Question;
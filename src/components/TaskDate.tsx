import dayjs from 'dayjs';
import React from 'react'
import { FaHotjar, FaSun, FaRegPaperPlane } from 'react-icons/fa';
interface Props {
    showTaskDate: boolean;
    setShowTaskDate: (isShow: boolean) => void;
    setTaskDate: (date: string) => void
}

function TaskDate({ showTaskDate, setShowTaskDate, setTaskDate }: Props) {
    return (<>{
        showTaskDate && (
            <div className="task-date" data-testid="task-date-overlay">
                <ul className="task-date__list">
                    <li>
                        <div
                            onClick={() => {
                                setShowTaskDate(false);
                                setTaskDate(dayjs().format('DD/MM/YYYY'));
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setShowTaskDate(false);
                                    setTaskDate(dayjs().format('DD/MM/YYYY'));
                                }
                            }}
                            data-testid="task-date-today"
                            tabIndex={0}
                            aria-label="Select today as the task date"
                            role="button"
                        >
                            <span>
                                <FaHotjar />
                            </span>
                            <span>Today</span>
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                setShowTaskDate(false);
                                setTaskDate(dayjs().add(1, 'day').format('DD/MM/YYYY'));
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setShowTaskDate(false);
                                    setTaskDate(dayjs().add(1, 'day').format('DD/MM/YYYY'));
                                }
                            }}
                            data-testid="task-date-tomorrow"
                            role="button"
                            tabIndex={0}
                            aria-label="Select tomorrow as the task date"
                        >
                            <span>
                                <FaSun />
                            </span>
                            <span>Tomorrow</span>
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                setShowTaskDate(false);
                                setTaskDate(dayjs().add(7, 'days').format('DD/MM/YYYY'));
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setShowTaskDate(false);
                                    setTaskDate(dayjs().add(7, 'days').format('DD/MM/YYYY'));
                                }
                            }}
                            data-testid="task-date-next-week"
                            aria-label="Select next week as the task date"
                            tabIndex={0}
                            role="button"
                        >
                            <span>
                                <FaRegPaperPlane />
                            </span>
                            <span>Next week</span>
                        </div>
                    </li>
                </ul>
            </div>
        )}</>)
}

export default TaskDate
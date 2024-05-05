'use client';
import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

type InputProps = {
    label: string;
    placeholder?: string;
    type: string;
    name: string;
}

export const Input = ({ label, placeholder, type, name }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="text-[10px] md:text-[12px] lg:text-[15px]">
            <label className='font-medium'>{label}</label>
            <div className="relative">
                <input
                    className="border border-yellow focus:outline-yellow min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px] rounded-sm"
                    placeholder={placeholder}
                    type={type === 'password' && !showPassword ? 'password' : 'text'}
                    name={name}
                    required
                />
                {type === 'password' && (
                    <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={handleTogglePassword}
                    >
                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </span>
                )}
            </div>
        </div>
    );
}
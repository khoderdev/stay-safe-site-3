import React from 'react';

function PublicHealthAcademy() {
	return (
		<div className="relative">
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
        <h2 className="text-4xl font-bold">The First slide</h2>
        <p className="mt-2">Scroll Down for next slide</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <h2 className="text-4xl font-bold">The Second slide</h2>
        <p className="mt-2">Scroll Down for next slide</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 className="text-4xl font-bold">The Third slide</h2>
        <p className="mt-2">Scroll Down</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
        <h2 className="text-4xl font-bold">The Fourth slide</h2>
    </div>
</div>
	);
}

export default PublicHealthAcademy;

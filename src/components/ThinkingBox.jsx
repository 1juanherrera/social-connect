import { useState } from 'react';

const ThinkingBox = () => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica de envío del texto
        console.log(text);
        setText('');
    };

    return (
        <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
            <form onSubmit={handleSubmit}>
                <label htmlFor="thinking" className="block text-gray-700 text-sm font-bold mb-2">¿Qué estás pensando?</label>
                <textarea
                    id="thinking"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="3"
                />
                <button type="submit" className="mt-3 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Publicar
                </button>
            </form>
        </div>
    );
};

export default ThinkingBox;
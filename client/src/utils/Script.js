


useEffect(() => {
    const data = {
        courseTitle,
        coursePrice,
        discount,
        image: image ? image.name : null, // file itself can't be saved
        chapters,
        courseDescription: quillRef.current?.root.innerHTML || '',
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}, [courseTitle, coursePrice, discount, image, chapters]);


useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        const parsed = JSON.parse(savedData);
        setCourseTitle(parsed.courseTitle || '');
        setCoursePrice(parsed.coursePrice || 0);
        setDiscount(parsed.discount || 0);
        setChapters(parsed.chapters || []);
        setTimeout(() => {
            if (quillRef.current && parsed.courseDescription) {
                quillRef.current.root.innerHTML = parsed.courseDescription;
            }
        }, 0);
        // Can't restore image directly (use FileReader if needed)
    }
}, []);


const handleSubmit = (e) => {
    e.preventDefault();
    // Collect and send data...

    // Optionally clear the local storage
    localStorage.removeItem(LOCAL_STORAGE_KEY);

    alert('Course saved!');
};


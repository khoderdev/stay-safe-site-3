const getFeatures = (consultationType) => {
  return [
    ...(consultationType === 'clinic' || consultationType === 'in-house'
      ? [
          { title: 'Patient Assessment', inclusive: true, necessary: true },
          { title: 'Blood Lipid Profile', inclusive: true, necessary: false },
          { title: 'Blood Glucose Profile', inclusive: true, necessary: false },
          { title: 'Blood Pressure Profile', inclusive: true, necessary: false },
          { title: 'Body Composition Analysis', inclusive: true, necessary: true },
          { title: 'Anthropometric Measurements', inclusive: true, necessary: true },
          { title: 'Medical Dietary Therapy', inclusive: true, necessary: true },
          { title: 'Therapeutic Diet', inclusive: true, necessary: true },
        ]
      : []),

    ...(consultationType === 'online'
      ? [
          { title: 'Patient Assessment', inclusive: true, necessary: true },
          { title: 'Medical Dietary Therapy', inclusive: true, necessary: true },
          { title: 'Therapeutic Diet', inclusive: true, necessary: true },
        ]
      : []),

    ...(consultationType === 'corporate' || consultationType === 'community'
      ? [
          { title: 'Tailored Dietary Presentation', inclusive: true, necessary: true },
          { title: 'Patient Assessment', inclusive: true, necessary: true },
          { title: 'Blood Lipid Profile', inclusive: true, necessary: false },
          { title: 'Blood Glucose Profile', inclusive: true, necessary: false },
          { title: 'Blood Pressure Profile', inclusive: true, necessary: false },
          { title: 'Body Composition Analysis', inclusive: true, necessary: true },
          { title: 'Anthropometric Measurements', inclusive: true, necessary: true },
          { title: 'Medical Dietary Therapy', inclusive: true, necessary: true },
          { title: 'Therapeutic Diet', inclusive: true, necessary: true },
        ]
      : []),
  ];
};

export default getFeatures;

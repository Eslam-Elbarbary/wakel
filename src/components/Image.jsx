function Image({ src, alt = '', className = '', ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        // Hide broken images gracefully
        e.target.style.display = 'none';
      }}
      {...props}
    />
  );
}

export default Image;

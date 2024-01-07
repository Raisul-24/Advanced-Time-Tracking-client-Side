const MainLayout = (showContent) => {
   return (
      <div>
      {showContent ? (
        <p>Content is visible.</p>
      ) : (
        <p>Content is hidden.</p>
      )}
    </div>
   );
};

export default MainLayout;
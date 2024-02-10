const PublicLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-full dark:bg-[#111111]">
      {children}
    </div>
   );
}
 
export default PublicLayout;
export function AppLayout({ title }: { title: string }) {
  return (<>
    {title}
    <p>The above is passed from props</p>
  </>);
}

export default AppLayout;

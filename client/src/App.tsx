import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ManagedServices from "@/pages/ManagedServices";
import BidWinIntensive from "@/pages/BidWinIntensive";
import Founder from "@/pages/Founder";
import AdminLeads from "@/pages/AdminLeads";
import Brief from "@/pages/Brief";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProposalModal from "@/components/ProposalModal";
import ScrollToTop from "@/components/ScrollToTop";
import { ModalProvider, useModal } from "@/context/ModalContext";

function ModalRenderer() {
  const { modalType } = useModal();
  return modalType ? <ProposalModal /> : null;
}

function Router() {
  const [location] = useLocation();
  const isBrief = location === "/brief";

  if (isBrief) {
    return (
      <>
        <ScrollToTop />
        <Switch>
          <Route path="/brief" component={Brief} />
        </Switch>
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/managed-services" component={ManagedServices} />
        <Route path="/bid-win-intensive" component={BidWinIntensive} />
        <Route path="/founder" component={Founder} />
        <Route path="/admin" component={AdminLeads} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ModalRenderer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ModalProvider>
          <Toaster />
          <Router />
        </ModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

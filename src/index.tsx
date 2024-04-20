import React from "react";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import { publicRouters } from "./routes/index";
import Layout from "./layout/Layout";
import { Route } from "react-router";
import { ConfigProvider, getConfig } from "./config-provider";
import ErrorBoundary from "./components/error-boundary";
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

export const queryClient = new QueryClient();

const MyApp = () => {
  return (
    <RecoilRoot>
      <ConfigProvider
        cssVariables={{
          "--zmp-primary-color": getConfig((c) => c.template.primaryColor),
          "--zmp-secondary-color": getConfig((c) => c.template.secondaryColor),
        }}
      >
        <QueryClientProvider client={queryClient}>
          <App>
            <SnackbarProvider>
              <ErrorBoundary>
                <ZMPRouter>
                  <AnimationRoutes>
                    {publicRouters.map((route) => {
                      const Page = route?.component;
                      return (
                        <Route
                          path={route?.path}
                          key={route?.path}
                          element={
                            Layout ? (
                              <Layout>
                                <Page />
                              </Layout>
                            ) : (
                              <Page />
                            )
                          }
                        />
                      );
                    })}
                  </AnimationRoutes>
                </ZMPRouter>
              </ErrorBoundary>
            </SnackbarProvider>
          </App>
        </QueryClientProvider>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default MyApp;

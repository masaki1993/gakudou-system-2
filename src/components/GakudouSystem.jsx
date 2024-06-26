import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper } from '@mui/material';

const GakudouSystem = () => {
  const { user, signOut } = useAuth();
  const [children, setChildren] = useState([]);

  useEffect(() => {
    fetchChildren();
  }, []);

  const fetchChildren = async () => {
    const { data, error } = await supabase
      .from('会員')
      .select('*')
      .eq('保護者ID', user.id);
    
    if (error) console.error('Error fetching children:', error);
    else setChildren(data || []);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            学童システム
          </Typography>
          <Button color="inherit" onClick={signOut}>ログアウト</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Welcome, {user.email}
              </Typography>
              <Typography variant="body1">
                You have {children.length} children registered.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default GakudouSystem;
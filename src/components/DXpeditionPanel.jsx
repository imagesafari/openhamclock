/**
 * DXpeditionPanel Component
 * Shows active and upcoming DXpeditions
 */
import React from 'react';

export const DXpeditionPanel = ({ data, loading }) => {
  const getStatusStyle = (expedition) => {
    if (expedition.isActive) {
      return { bg: 'rgba(0, 255, 136, 0.15)', border: 'var(--accent-green)', color: 'var(--accent-green)' };
    }
    if (expedition.isUpcoming) {
      return { bg: 'rgba(0, 170, 255, 0.15)', border: 'var(--accent-cyan)', color: 'var(--accent-cyan)' };
    }
    return { bg: 'var(--bg-tertiary)', border: 'var(--border-color)', color: 'var(--text-muted)' };
  };

  return (
    <div className="panel" style={{ padding: '12px' }}>
      <div className="panel-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span>🌍 DXPEDITIONS</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {loading && <div className="loading-spinner" />}
          {data && (
            <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
              {data.active > 0 && <span style={{ color: 'var(--accent-green)' }}>{data.active} active</span>}
              {data.active > 0 && data.upcoming > 0 && ' • '}
              {data.upcoming > 0 && <span style={{ color: 'var(--accent-cyan)' }}>{data.upcoming} upcoming</span>}
            </span>
          )}
        </div>
      </div>
      
      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {data?.dxpeditions?.length > 0 ? (
          data.dxpeditions.slice(0, 15).map((exp, idx) => {
            const style = getStatusStyle(exp);
            return (
              <div key={idx} style={{ 
                padding: '6px 8px',
                marginBottom: '4px',
                background: style.bg,
                borderLeft: `3px solid ${style.border}`,
                borderRadius: '4px',
                fontSize: '12px',
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-amber)', fontWeight: '700', fontSize: '13px' }}>{exp.callsign}</span>
                  <span style={{ color: style.color, fontSize: '10px' }}>
                    {exp.isActive ? '● NOW' : exp.isUpcoming ? 'UPCOMING' : 'PAST'}
                  </span>
                </div>
                <div style={{ color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {exp.entity}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3px' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>{exp.dates}</span>
                  <div style={{ display: 'flex', gap: '6px', fontSize: '10px' }}>
                    {exp.bands && <span style={{ color: 'var(--accent-purple)' }}>{exp.bands.split(' ').slice(0, 3).join(' ')}</span>}
                    {exp.modes && <span style={{ color: 'var(--accent-cyan)' }}>{exp.modes.split(' ').slice(0, 2).join(' ')}</span>}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px' }}>
            {loading ? 'Loading DXpeditions...' : 'No DXpedition data available'}
          </div>
        )}
      </div>
      
      {data && (
        <div style={{ marginTop: '6px', textAlign: 'right', fontSize: '9px' }}>
          <a href="https://www.ng3k.com/misc/adxo.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            NG3K ADXO Calendar
          </a>
        </div>
      )}
    </div>
  );
};

export default DXpeditionPanel;

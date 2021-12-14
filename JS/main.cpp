#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

class KHACHHANG
{
    private:
        char makh[15];
        char tenkh[50];
        char diachi[50];
    public:
        void nhap();
        void xuat();
};

class DICHVU
{
    private:
        char madv[15];
        char tendv[50];
        int cuoc;
        int phuthu;
    public:
        void nhap();
        void xuat();
        float tong()
        {
            return cuoc+phuthu;
        }
        friend class PHIEU;
};

class PHIEU
{
    private:
        char ngaytt[30];
        char tai[50];
        KHACHHANG x;
        DICHVU *a;
        int n;
    public:
        void nhap();
        void xuat();
        void chen(DICHVU );
};

void KHACHHANG::nhap()
{
    cout << "Nhap ma khach hang: ";     fflush(stdin);  gets(makh);
    cout << "Nhap ten khach hang: ";    fflush(stdin);  gets(tenkh);
    cout << "Nhap dia chi khach hang:"; fflush(stdin);  gets(diachi);
}

void KHACHHANG::xuat()
{
    cout << setw(15) << makh << setw(15) << tenkh << setw(30) << diachi << endl;
}

void DICHVU::nhap()
{
    cout << "Nhap ma dich vu: ";    fflush(stdin); gets(madv);
    cout << "Nhap ten dich vu: ";   fflush(stdin);  gets(tendv);
    cout << "Nhap cuoc dich vu: ";   cin >> cuoc;
    cout << "Nhap phu thu dich vu: ";   cin >> phuthu;
}

void DICHVU::xuat()
{
    cout << setw(15) << madv << setw(15) << tendv << setw(15) << cuoc << setw(15) << phuthu << setw(15);
}

void PHIEU::nhap()
{
    x.nhap();
    cout << "Nhap ngay thanh toan: "; fflush(stdin); gets(ngaytt);
    cout << "Nhap noi thanh toan: ";    fflush(stdin); gets(tai);
    cout << "Nhap so dich vu: ";    cin >> n;
    a=new   DICHVU[n];
    for(int i = 0; i<n; i++)
        a[i].nhap();
}

void PHIEU::xuat()
{
    cout << setw(20) << "PHIEU THANH TOAN CUOC PHI" << endl;
    x.xuat();
    cout << setw(15) << ngaytt << setw(15) << tai << endl;
    cout << setw(15) << "Ma DV" << setw(15) << " Ten DV" << setw(15) << "Cuoc" << setw(15) << "Phu thu" << setw(15) << "Tong" << endl;
    long tongthanhtien = 0;
    for(int i=0; i<n; i++)
    {
        a[i].xuat();
        tongthanhtien += a[i].tong();
        cout << a[i].tong() << endl;
    }
    cout << "Tong thanh tien: " << tongthanhtien << endl;  
    cout << endl;
    cout << setw(20) << "THONG TIN DICH VU CO TEN ADSL" << endl;
    cout << setw(15) << "Ma DV" << setw(15) << " Ten DV" << setw(15) << "Cuoc" << setw(15) << "Phu thu" << setw(15) << "Tong" << endl;
    for(int i=0; i<n; i++)
    {
        if(strcmp(a[i].tendv, "ADSL") == 0)
        {
            a[i].xuat();
            cout << a[i].tong() << endl;
        }
    }
}

void PHIEU::chen(DICHVU x)
{
    this->a[n] = x;
    this->n++;
}



int main()
{
    PHIEU t;
    t.nhap();
    t.xuat();
    DICHVU x;
    x.nhap();
    t.chen(x);
    t.xuat();
    return 0;
}
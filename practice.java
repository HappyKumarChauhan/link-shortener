class practice{
    public static int[] compare(int[]a,int[]b){
        int result[]=new int[2];
        for(int i=0;i<a.length;i++){
            if(a[i]>b[i]){
                result[0]++;
            }else if(a[i]<b[i]){
                result[1]++;
            }
        }
        return result;
    }
    public static void main(String[] args) {
        int a[]=new int[]{1,2,3};
        int b[]=new int[]{3,2,1};
        int c[]=compare(a, b);
        for (int i : c) {
            System.out.println(i);
        }
    }
}